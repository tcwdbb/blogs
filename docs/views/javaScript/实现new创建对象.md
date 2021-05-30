---
title: 实现new创建对象
sidebar: auto
categories:
- JavaScript
tags:
- 手写
date: 
- 2021-3-25
---
``` js
function createObject(fn) {
			//创建一个新对象并指定原型对象
			const obj = Object.create(fn.prototype);
			//通过call改变this指向并执行构造函数代码
			const newObj = fn.call(obj);
			//如果构造函数有返回则返回，没有就返回一个obj
			if(typeof newObj == 'object')
			{
				return newObj
			}else {
				return obj;
			}
		}
```