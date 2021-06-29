## Promise的含义（什么是Promise）
  - Promise是异步编程的一种解决方案，比传统的解决方案回调函数和事件更合理和更强大。简单来说Promise就是一个容器，里面保存着在未来某个时间才会结束的事件结果，从语法上来说Promise是一个对象，从它可以获取一步操作的消息。promise提供统一的API，各种异步操作都可以用同样的方法处理。
  - Promise有三种状态：pepending（进行中），fulfilled（已成功），rejected（已失败）。只有异步操作的结果可以决定当前是处于哪种状态，任何其他操作都无法改变这个状态。
    - 一旦状态改变，就不会再变。Promise状态改变只有两种可能：pending => fulfilled 或者 pending => rejected

## Promise的使用
  - Promise是一个构造函数，new Promise返回一个Promise对象，接收一个函数作为参数，该函数有两个函数类型参数，分别是resolve和reject
  ```js 
    const promise = new Promise((resolve, reject) => {
       // 异步处理
       // 处理结束后、调用resolve 或 reject
    });
  ```
  - Promise.then
    - 传入两个回调函数，成功时执行onFulfilled，失败时执行onRejected
  ```js
    // onFulfilled 是用来接收promise成功的值
    // onRejected 是用来接收promise失败的原因
    promise.then(onFulfilled, onRejected);
  ```
## Promise和callback的区别
  - 两者之间的主要区别在于，使用回调方法时，我们通常只是将回调传递给一个函数，该函数将在完成时被调用以获取某些结果。但是，在Promise中，您将回调附加在返回的Promise对象上

## async和awate
  - async函数返回的都是Promise对象
  - 会将返回值包装为一个Promise对象
  ```js
  async function test1() {
    return 1;
  }
  ```
  - Promise.then 成功的情况对应 await
  - Promise.catch 异常的情况对应 try...catch