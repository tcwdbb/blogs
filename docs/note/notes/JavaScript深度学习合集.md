## undefined
 - 1. undefined 既是原始数据类型，也是一个原始值数据
 - 2. undefined 全局对象上的一个属性  window.undefined
 - 3. 不可写  writable: false
  ```js
  window.undefined = 1;
  console.log(window.undefined); // undefined
  ```
 - 4. 不可配置  configurable: false
  ```js
  delete window.undefined;
  console.log(window.undefined); // undefined
  ```
- 5. 不可枚举 enumerable: false
  ```js
  for (var key in window) {
    if (key === undefined) {
      console.log(key); //没有输出
    }
  }
  ```
- 6. 报错不可重新定义
  ```js
  Object.definedProperty(window, 'undefined', {
    writable: true,
    enumerable: true,
    configurable: true
  })
  ```
- 7. 系统会给一个未赋值的变量自动赋值为undefined，类型也是undefined
  ```js
  var a;
  console.log(a); //undefined
  console.log(typeof a); //undefined
  ```
- 8. 函数内部没有显示返回一个值的时候，系统默认给函数返回一个undefined
  ```js
  function test() {
    console.log(111); // 111
  }
  consolo.log(test());  // undefined
  ```
- 9. 全局下undefined无法作为一个变量使用，在局部作用域可以
  ```js
  var undefined = 1;
  consolo.log(undefined); // undefined
  ```
  ```js
  void(0); // ->对0进行求值 void返回undefined
  console.log(void(0) === window.undefined);  //true
  ```

## this指向
  - this -> JavaScript 关键字
  - 当前环境执行期上下文对象的一个属性
  - this在不同环境，不同作用下，表现不同
  - 全局作用域下this -> 全局对象
    ```js
    console.log(this === window); // true
    ```
  - 获取全局对象
    ```js
    /**
     * web: window,self,frames,this
     * node: global
     * worker: self
     * 通用: globalThis
    */
    var a = 'global -> a';
    var obj = {
      a: 'obj -> a',
      test: function() {
        console.log(this.a);  // obj -> a
        console.log(window.a);  // global -> a
        console.log(self.a);  // global -> a
        console.log(frames.a);  // global -> a
        console.log(globalThis.a);  // global -> a
      }
    }
    obj.test();
    ```
    - 普通函数严格模式下在全局作用域中函数this是undefined，箭头函数中this还是window
    ```js
    function test() {
      'use strict';
      return this;
    }
    console.log(test()); // 严格模式下：undefined，非严格模式：window对象
    // 谁调用函数，函数内部this就指向谁
    console.log(window.test()); // window对象
    ```
  ### 类
- 类的本质还是函数
    ```js
    class Test {
      constructor () {
        this.test = function() {
          //类的非静态方法在通过new实例化的过程中添加到this
          console.log('none-static:' + this);
        }
      }
      // 类的静态方法 -> Test.prototype{...}
      // 通过new this -> {}（创建一个空对象） -> __proto__（对象有一个__proto__属性指向类的原型） -> Test.prototype
      test() {
        console.log('static:' + this)
      }
    }
    const test = new Test();
    test.test();  // none-static
    ```
- 类的继承
    ```js
    class Father {
				constructor(age) {
					this.age = age
				}
				say() {
					console.log('hello')
				}
			}
			class Son extends Father {
				constructor() {
				    super(22);// this -> new Father -> {}
					this.name = 'c';// {age: 22,name: "c"}
				}
				study() {
					this.say();
				}
			}
			const son = new Son();
			son.study(); //hello
    ```
### call apply bind
  - apply的第二个参数是数组形式
  - bind是返回一个改变this指向之后的新的函数，同一个函数多次使用bind改变this指向只生效一次
  ```js
  var a = 2;
  obj = {
    a: 1
  };
  obj1 = {
    a: 100
  }
  function test(b,c) {
    console.log(this.a, b, c)
  }
  test(2, 3); // 2 2 3
  var test1 = test.bind(obj, 2, 3);
  test1(); //1 2 3
  //只有第一次生效
  var t = test.bind(obj, 2, 3).bind(obj1, 2, 3);
  t(); // 1 2 3
  ```
### 箭头函数
  - 箭头函数this是当前定义位置this
  - 箭头函数忽略任何形式的this指向的改变
  ```js
  var a = 2;
  var obj = {
    a: 1;
  }
  const test = () => {
    console.log(this.a);
  }
  test(); // 2
  test.call(obj); // 2
  test.apply(obj); // 2
  var test1 = test.bind(obj);
  test1(); // 2
  ```