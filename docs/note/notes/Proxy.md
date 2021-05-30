Proxy 是 ES6 中的一个构造函数

使用方法：

```js
//target  目标对象
//handler  容器 无数可以处理对象属性的方法
let proxy = new Proxy(target, handler);
```

- Proxy 操作对象中已有的属性 自定义属性的获取，赋值，枚举，函数调用等功能
    - 内部方法： get set has deleteProperty ...
    - Proxy 内部方法调用时去调用目标对象相应的方法  因此可以通过重写handler中的方法做一些拦截  
      - 代理：通过handler中的方法间接的去修改target

- defineProperty 数组通过下标修改值，push，shify等方法不会触发setter，所以在Vue2.0中将数组的方法进行了重写，在3.0中改为使用Proxy

- 数据劫持：直接操作源对象，在get，或set方法内做拦截。
- Proxy：做一层代理去访问，必须通过代理去完成操作源对象
```js
let proxy = new Proxy(target, {
  /**
   * target 目标对象，可以是对象，数组，函数
   * prop  目标的属性名
   * proxy.属性名 这时会调用get方法
   */

  get(target, prop) {},
  set(target, prop, value) {},
});
```

Proxy 可以操作数组，函数

简单实现

```js
let obj = {
  a: 1,
  b: 2,
};
function MyProxy(target, handler) {
  //拷贝目标对象
  let _target = deepClone(target);
  Object.keys(_target).forEach((key) => {
    //新对象属性设置get和set方法
    Object.defineProperty(_target, key, {
      get() {
        //获取值时调用传入的get方法
        return handler.get && handler.get(target, key);
      },
      set(newValue) {
        //设置值时调用传入的set方法
        handler.set && handler.set(target, key, newValue);
      },
    });
  });
  return _target;
  //深拷贝函数
  function deepClone(org, target) {
    var target = target || {},
      toStr = Object.prototype.toString,
      arrType = "[object Array]";
    for (var key in org) {
      if (org.hasOwnProperty(key)) {
        if (typeof org[key] === "object" && org[key] !== null) {
          target[key] = toStr.call(org[key]) === arrType ? [] : {};
          deepClone(org[key], target[key]);
        } else {
          target[key] = org[key];
        }
      }
    }
    return target;
  }
}
//实例化
let proxy = new MyProxy(obj, {
  get(obj, prop) {
    return "GET:" + prop + "=" + Reflect.get(obj, prop); // => obj[prop]
  },
  set(obj, prop, value) {
    //有返回值，为boolean类型
    Reflect.set(obj, prop, value); // => obj[prop] = value
    console.log("SET:" + prop + "=" + Reflect.get(obj, prop));
  },
});
console.log(proxy.a); // GET:a=1
proxy.b = 3; // SET:b=3
```
