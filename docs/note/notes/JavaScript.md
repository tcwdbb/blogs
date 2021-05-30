---

---
函数变成表达式：在函数前加上-，+，！等符号，立即执行函数是一个表达式，只有表达式才能使用立即执行符号()

- ## AMD
- 异步模块定义   前置依赖，等到模块加载完毕才执行回调函数
    - 引入文件require.js
    - 模块定义 
    ``` js
    define(moduleName, [module], callback)
    ```
    - 模块引入 
    ``` js
    require([module], callback)
    ```
    - 引入时必须配置模块路径，
    ``` js
      require.config({
          path: {
            modeleName: 'path'
          }
      })
    ```

- ## CMD
- 通用模块定义
    - 引入文件：sea.js
    - 模块定义：
        ``` js
          difine(function(require, exports, module){
            let modeleName = require('fileName');
            return {}
          })
        ```
    - 引入模块
      ``` js
        seajs.use(['modulePath'], function(moduleName){

        })
      ```
- 共同点：依赖加载完成才执行后续操作
- 不同点： 依赖就近，按需加载（使用到模块时才加载） 跟ComonJS 和AMD本质上的不同
    - AMD 依赖前置（先加载模块再执行回调函数）
- ## common.js 和 ES6的区别
  - 1
    - common.js 模块导入的是一个值的拷贝
    - ES6 模块导入的是一个值的引用
  - 2
    - common.js 是在运行时加载
    - ES6 是在编译时加载