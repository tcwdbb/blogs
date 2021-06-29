---

---
## Webpack是什么？
  - Webpack是一种前端资源构建工具，一个静态模块打包器（module bundler）。
  - 在Webpack看来，前端所有资源文件(js/json/ss/img/less/...)都会作为模块处理
  - 它将根据模块的依赖关系进行静态分析，打包生成对应的静态资源(bundle)

      从入口文件开始打包记录每一个依赖形成一个依赖关系树状图，通过顺序，一次把这些依赖引入，形成一个chunk（代码块），在对这个代码块进行处理（比如将less编译成css文件，js编译成浏览器能识别的js语法，对代码块处理这个过程就叫打包），打包后将这些处理好的资源输出出去，文件叫bundle
## Webpack的五个核心概念
  - Entry
    - 入口（Entry)指示 Webpack以哪个文件为入口起点打包，分析构建内部依赖图
  - Output
    - 输出（Output）指示 Webpack打包后的资源 bundles输出到哪里去，以及如何命名
  - Loader
    - Loader让 Webpack 能够去处理那些非 javascript文件（Webpack自身只理解javascript）（将img，css等资源转换为Webpack能识别的资源）
  - Plugins
    - 插件（Plugins）可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境的变量等
  - Mode
    - 模式（Mode）指示 Webpack使用相应模式的配置
      - development 会将process.env.NODE_ENV 的值设置为development。启用NamedChunksPlugin 和 NamedModulesPlugin。特点：能让代码本地调试运行环境
      - production 会讲process.env.NODE_ENV 的值设置为production。启用FlagDependencyUsagePlugin，FlagIncludedChunksPlugin，ModuleConcatenationPlugin，NoEmitOnErrorsPlugin，OccurrenceOrderPlugin，SideEffectsFlagPlugin和UglifyJsPlugin 特点：能让代码优化上线的运行环境
## 运行指令
  ```js
  /**
 * index.js：webpack入口起点文件
 * 1.运行指令：webpack ./src/index.js -o ./build/dev.js --mode=development --progress --stats-hash --stats-ids
 * 解析：
 * ./src/index.js：入口文件
 *  -o ./build/dev.js ：输入文件目录
 * --mode=development ：制定模式为开发模式
 * --progress ：显示打包过程
 * --stats-hash ：展示打包生成hash值
 * 生产环境：
 * webpack ./src/index.js -o ./build/pro.js --mode production
 * webpack能处理js和json文件，不能处理css/img等资源
 * 生产环境和开发环境把ES6模块化编译成浏览器能识别的模块化
 * 生产环境比开发环境多一个压缩js代码
 */
  ```
## 打包样式资源
  - webpack.config.js webpack的配置文件
    - 作用：指示webpack 做哪些事情（当运行webpack指令时，会加载里面的配置）
    - 所有的构建工具都是基于nodejs平台运行的 模块化默认采用common.js
## webpack配置
  ### 提取单独的css文件
  ```js
  //引入插件
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');
  //loader配置
  {
        test: /\.css$/,
        use: [
          //创建style标签。将样式放入
          //'style-loader',
          //这个loader取代style-loader.作用：提取js中的css成单独文件
          {
            loader: MiniCssExtractPlugin.loader,
            //样式内图片路径错误解决
            options: {
              publicPath: '../'
            }
          },
          //将css文件整合到js中
          'css-loader'
        ]
      },
  //插件配置
  new MiniCssExtractPlugin({
      //对输出文件进行重命名
      filename: 'css/main.[contenthash:8].css'
    }),
  ```
  ### 兼容性处理
  ```js
  /** 
           * css兼容性处理：postcss --> postcss-loader postcss-preset-env(插件)
           * postcss-preset-env 帮postcss找到package.json中browserslist里面的配置，通过配置加载指定的兼容性样式
           * "browserslist": {
           *    开发环境：要使用开发环境，要设置node环境变量：process.env.NODE_ENV = developemt
                "development": [
                  最近的一个版本
                  "last 1 chrome version",
                  "last 1 firefox version",
                  "last 1 safari version"
                ],
                生产环境：默认是看生产环境
                "production": [
                  ">0.2%",
                  "not dead",
                  "not op_mini all"
                ]
              }
          */
          {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          // 使用loader的默认配置
          // postcss-loader
          // 也可以不使用默认配置，使用下面配置
          {
            // 在此修改loader的配置
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => {
                // postcss的插件
                require('postcss-preset-env')()
              }
            }
          }
        ]
      }
  ```
  ### 压缩css
  ```js
  //压缩css插件：optimize-css-assets-webpack-plugin   webpack5使用：css-minimizer-webpack-plugin 
  //引入插件
  const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
  //使用
  plugins: [
    //压缩css
    new CssMinimizerWebpackPlugin()
  ]
  ```
## eslint配置
  ```js
     //loader配置
     {
      /**
         * 语法检查：eslint-loader eslint库
         * 只检查自己写的源代码，第三方库不检查
         * 设置检查规则：package.json中eslintConfig中设置
         * aribnb --> eslint-config-airbnb-base   eslint    eslint-plugin-import
         * 下载：eslint-loader eslint-config-airbnb-base   eslint    eslint-plugin-import
         */
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          //自动修复eslint的错误
          fix: true
        }
      },
      //package.json配置
      "eslintConfig": {
        "extends": "airbnb-base",
        "rules": {
          "max-len" : ["error", {"code" : 300}]
        }
      }
  ```

## babel js兼容性处理
  ```js
  //loader配置
  {
        //1. js代码基本兼容性处理 babel-loader  @babel/preset-env
        //下载 babel-loader  @babel/preset-env
        // 问题：只能转换基本语法，如promise不能转换
        // 2. 第二种方案 全部js兼容性处理 --> @babel/polyfill
        // 问题：只要解决部分兼容性问题，但是将所有的兼容性代码引入，体积太大
        // 3. 第三种方案 按需加载 --> core-js
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          //预设：指示babel怎么进行转换
          presets: [
            [
              '@babel/preset-env',
              {
                //按需加载
                useBuiltIns: 'usage',
                //指定corejs版本
                corejs: {
                  version: 3
                },
                //指定兼容性做到哪个版本浏览器
                targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  safari: '10',
                  edge: '17'
                }
              }
            ]

          ]
        }
      }
  ```
## 多入口配置
  ```js
  const path = require('path');
   entry: {
     index: './src/js/index.js',
     other: './src/js/other.js'
   },
   output: {
     filename: '[name].[contenthash:8].js' //name即多入口时 entry的key：index，other。[contenthash:8]：代码不变的时候能命中缓存，访问更快
     path: path.join(__dirname, 'build')
   }
   //多入口生成index.html
   plugins: [
     //多入口生成index.html
     new HtmlWebpackPlugin({
       template: './src/index.html',
       filename: 'index.html',
       //chunks 表示该页面要引用哪些chunk（即上面的index和other）
       chunks: ['index'] // 只引用index.js
     }),
     //多入口生成other.html
     new HtmlWebpackPlugin({
       template: './src/other.html',
       filename: 'other.html',
       chunks: ['other']
     })
   ]
  ```
## 抽离公共代码和第三方代码
```js
  optimization: {
    //分割代码块
    splitChunks: {
      chunks: 'all', //all 全部chunk   initial 入口chunk，对于异步导入的文件不处理。 async 异步 chunk，只对异步导入的文件处理
      cacheGroups: {
        //第三方模块
        vendor: {
          name: 'vender', //chunk名称
          priority: 1, //权限更高，优先抽离，重要！！
          test: /node_modules/,
          minSize: 0, //大小限制
          minChunks: 1 //最少重复用过几次
        },
        //公共模块
        common: {
          name: 'common',
          priority: 0, //优先级
          minSize: 0, //公共模块的大小限制
          minChunks: 2 //公共模块最少复用过几次
        }
      }
    }
  }
```
## webpack性能优化
  ### 优化babel-loader
    ```js
    test: /\.js$/,
    use: ['babel-loader?cacheDiretory'], //cacheDiretory 开启缓存，没有改的es6代码不会重新编译，会启动缓存
    include: path.resolve(__dirname, 'src') //通过include或者exclude确定范围或排除范围
    //exclude: /node_moudles/
    ```
