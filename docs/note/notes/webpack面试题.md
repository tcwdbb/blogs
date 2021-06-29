---

---

- 前端代码为何要进行构建和打包？

- module，chunk，bundle分别是什么意思，有何区别
  - module 各个源码文件，webpack中一切皆模块
  - chunk 多模块合并成的，如entry impot() splitChunk
  - bundle 最终的输出文件

- webpack如何实现懒加载

- webpack常见性能优化
  - 优化打包构建速度 -开发体验和效率
    - 优化babel-loader
    - IgnorePlugin  避免引入无用模块,直接不引入
        比如 import moment from 'moment'
        默认会引入所有语言JS代码，代码过大
        ```js
        //忽略moment 下的 /locale 目录
        new webpack.IngnorePlugin(/\.\/locale/,/moment/);
        //手动引入中文语言包
        import 'moment/locale/zh-cn'
        ```
    - noParse   不去管哪些，引入但不打包
      ```js
      module: {
        noParse: [/reat\.min\.js$/]
      }
      ```
    - happyPack 多进程打包工具（插件）
    ```js
    const HappyPack = require('happypack');
    module: {
      rules: [
        {
          test: /\.js$/,
          //把对.js 文件的处理转交给 id 为babel 的happypack实例
          use: ['happypack/loader?id=babel']
        }
      ]
    }
    plugins: [
      //开启多进程打包
      new HappyPack({
        //用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件
        id: 'babel',
        //如何处理 .js文件，用法和 loader配置中一样
        loaders: ['babel-loader?cacheDiretory']
      })
    ]
    ```
    - parallelUglifyPlugin  多进程压缩js
      - webpack内置Uglify工具压缩js是单线程
      ```js
      const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
      plugins: [
        new ParallelUglifyPlugin({
          uglifyJS: {
            output: {
              beautify: false, //最紧凑的输出
              comments: false //删除所有注释
            },
            compress: {
              //删除所有 console 语句，可以兼容ie浏览器
              drop_console: true,
              // 内嵌定义了但是只用到一次的变量
              collapse_vars: true,
              // 提取出出现多次但是没有定义成变量去引用的静态值
              reduce_vars: true
            }
          }
        })
      ]
      ```
    - 自动刷新：整个网页全部刷新，速度较慢，状态会丢失
    ```js
    watch: true //开启监听，默认为false
    //注意，开启监听后，webpack-dev-server 会自动开启刷新浏览器
    
    //监听配置
    watchOptions: {
      ignore: /node_modiles/,//忽略哪些
      //监听到变化后会在300ms后再去执行动作，防止文件更新太快导致重新编译频率太高
      aggregateTimeout: 300,  //默认为300ms
      //判断文件是否发生变化是通过不停的询问系统指定文件有没有变化实现的
      poll: 1000 //默认每隔1000ms询问一次

    }
    ```
    - 热更新  代码更改完后浏览器不刷新，新代码生效，网页不刷新，状态不丢失
    ```js
    //webpack自带的插件
    const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
    entry: {
      index: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        './src/js/index.js'
      ]
    }
    if (moudle.hot) {
      module.hot.accept(['模块路径'], () => {
        
      })
    }
    ```
  - 优化产出代码 -产品性能

- babel-runtime和babel-polyfill的区别

    webpack5 主要是内部效率的优化
    对比webpack4，没有太多使用上的改动