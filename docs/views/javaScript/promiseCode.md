---
title: 手写promise
sidebar: auto
categories:
- JavaScript
tags: 
- 手写
date: 
- 2021-3-05
---
promise必须是这三个状态中的一种：等待态pending,解决态fulfilled或拒绝态rejected

只能从pending到fulfilled 或者 到rejected，只有在pending的状态才能发生改变

onFulfilled和onRejected都是可选参数，如果这两个参数不是函数就必须被忽略

``` js
		const PENDING = 'pending'
		const FULFILLED = 'fulfilled'
		const REJECTED = 'rejected'
		
		function myPromise(execotur) {
		let _self = this;
        //记录状态
		this.state = PENDING;
        //成功的结果
		this.value = 'undefind',
        //失败的信息
		this.reason = 'undefind',
        //用来存储成功时要执行的函数
		this.onFulfilled = [],
        //失败时执行的函数
		this.onRejected = []
		//成功的回调函数，promise的状态改变必须是在pending，不是pending的时候不允许改变状态
		function resolve(value) {
			if(_self.state === PENDING) {
				_self.state = FULFILLED;
				_self.value = value;
				_self.onFulfilled.forEach(fn => fn(value));
			}
		};
		//失败的回调函数
		function reject(reason) {
			if(_self.state === PENDING) {
				_self.state = REJECTED;
				_self.reason = reason;
				_self.onRejected.forEach(fn => fn(value));
			}
		};
		
		try{
			//实例化时构造函数会立即调用传入的执行函数，并将resolve和reject作为参数传入
			execotur(resolve, reject);
		}catch(e){
			reject(e);
		}
		
		myPromise.prototype.then = function(onFulfilled, onRejected) {
			//promise规定参数不是函数必须被忽略
			if(_self.state === FULFILLED) {
				typeof onFulfilled === 'function' && onFulfilled(_self.value);
			}else if(_self.state === REJECTED) {
				typeof onRejected === 'function' && onRejected(_self.reason);
			}else {
				//异步操作，执行then方法的时候状态还处于pending，所以需要将then的回调函数保存到数组中，当异步操作
				// 成功时调用resolve，在resolve中遍历数组取出存入的函数，然后执行函数并传入异步操作成功的结果
				typeof onFulfilled === 'function' && _self.onFulfilled.push(onFulfilled);
				typeof onRejected === 'function' && _self.onRejected.push(onRejected);
			}
		}
		
	}
	let p = new myPromise((resolve, reject) => {
		console.log("执行");
		setTimeout(() => {
			resolve(2);
		},2000)
	}).then(res => {
		console.log(res);
	},reject => {
		console.log('错误'+ reject)
	})
  ```
