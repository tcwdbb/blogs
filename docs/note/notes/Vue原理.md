## 组件化
  ### 如何理解MVVM

## 响应式
 - Object.defineProperty()的缺点
    - 1. 无法深度监听，需要递归到底，一次性计算量大
    - 2. 无法监听新增属性/删除属性（需要使用Vue.set Vue.delete）
    - 3. 无法监听数组，需要特殊处理
## vdom和diff
  - vdom 用js模拟DOM结构，计算出最小的变更，操作DOM
  - 用JS模拟DOM结构（vnode）
  - 新旧vnode对比，得出最小更新范围，最后更新DOM
  - 只有这样才能在数据驱动视图模式下，有效的控制DOM操作
## 模版编译
- with语法
  ```js
  const obj = {
    a: 100,
    b: 200
  }
  console.log(obj.a) //100
  console.log(obj.b) //200
  console.log(obj.c) //undefined
  //使用with，能改变{}内自由变量的查找方式
  //将{}内自由变量当作obj的属性来查找
  //with要慎用，它打破了作用域规则，易读性变差
  with (obj) {
  console.log(a) //100
  console.log(b) //200
  console.log(c) //报错
  }
  ```

  - 模版不是html，有指令，插值，JS表达式，能实现循环，判断
  - html是标签语言，只有JS才能实现循环，判断
  - 因此模版一定是转换为了JS代码，即模版编译

  - 模版编译为render函数，，执行render函数返回vnode
  - 基于vnode再执行patch和diff
  - 使用webpack vue-loader，会在开发环境下编译模版，在浏览器执行的时候就直接执行js的函数，不重新编译模版

  - 组件渲染更新过程

## 渲染过程
  - 初次渲染过程
    - 解析模版为render函数（或在开发环境已完成，vue-loader）
    - 触发响应式，监听data属性getter  setter
    - 执行render函数，生成vnode，patch(elem,vnode)
  - 更新过程
    - 修改data，触发setter（此前在getter中已被监听）
    - 重新执行render函数，生成newVnode
    - 执行patch(vode,newVnode)


    - 通过render函数生成虚拟dom树，在模版中使用了哪个data中的变量，就触发变量的getter，收集依赖，将这个变量观察（watcher）起来
    然后在修改data的时候，notify（通知）watcher，看修改的是不是之前被观察起来的，如果是之前已经作为依赖观察起来的，那就重新执行render函数
  
  - 异步渲染  data修改之后DOM不会立刻更新
    - 1. 异步渲染，$nextTick 待 DOM渲染完后触发回调
    - 2. 页面渲染时会将data的修改做整合，多次修改只会渲染一次（汇总data的修改，一次性更新视图）
      - 目的： 减少DOM操作次数，提高性能
## 前端路由
  - hash
    - 特点：
      - hash变化会触发网页跳转，即浏览器的前进后退
      - hash变化不会刷新页面，SPA必须的特点
      - hash永远不会提交到server端，

  - history
    - 配置
    ```js
    mode: history
    ```
    - 用url规范的路由，但跳转时不刷新页面
    - const state = {name: 'page1'}
    - history.pushState(state, '', 'page1')
    - window.onpopstate // 监听页面前景后退
      ```js
      window.onpopstate = (event) => {
        
      }
      ```
    - DOMContentLoaded  监听页面初次加载