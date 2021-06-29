## 什么是虚拟 DOM

- 虚拟 DOM：用 JavaScript 对象描述 DOM 的层次结构。DOM 中的一切属性都在虚拟 DOM 中有对应的属性
- 为什么要使用 xuniDOM
  - 因为 diff 算法是在新虚拟 DOM 和老虚拟 DOM 进行的，算出如何最小量更新，最后反应到真实 DOM 上

## h 函数的使用

  ```js
import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h,
    } from "snabbdom";
    //创建初 patch 函数
    const patch = init([
    classModule,
    propsModule,
    styleModule,
    eventListenersModule
    ])
    //创建虚拟节点
    const vNode = h('a', {
    props: {
    href: 'https://tcwdbb.github.io/blogs/',
    target: 'blank',
    },
    class: {
      'box': 'true'
    }
    }, 'My Blog');
    const container = document.getElementById('container');
    //让虚拟节点上树
    patch(container,vNode) 
  ```

  - h 函数可以嵌套使用，从而得到虚拟 DOM 树
  ```js
  //没有属性时，大括号可以不写
  h("ul", {}, [h("li", {}, "li1"), h("li", {}, "li2"), h("li", {}, "li3")]);
  ```

  - 得到如下虚拟 DOM 树

  ```js
  {
    "sel": "ul",
    "data": {},
    "children": [
      {"sel": "li", "data": {}, "text": "li1"},
      {"sel": "li", "data": {}, "text": "li2"},
      {"sel": "li", "data": {}, "text": "li3"}
    ]
  }
  ```
  ## diff算法
  - key：<strong>是节点的唯一标识</strong>，告诉diff算法，在更改前后它们是同一个DOM节点。不加key时会在最后新增一个节点然后从新旧虚拟节点不同处依次往下修改
  - <strong>只有是同一个虚拟节点，才进行精细化比较</strong>，否则就是暴力删除旧的节点，插入新的节点。
    - 如何定义同一个虚拟节点？    <strong>选择器相同且key相同</strong>
  - <strong>只进行同层级比较，不会进行跨层比较</strong>。即时是同一片虚拟节点，如果发生了跨层，依旧是暴力删除，然后插入新的。
