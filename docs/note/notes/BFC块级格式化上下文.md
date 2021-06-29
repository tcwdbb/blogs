## BFC是什么？
MDN的定义：
    块格式化上下文（Block Formatting Context，BFC） 是Web页面的可视CSS渲染的一部分，是块盒子的
    布局过程发生的区域，也是浮动元素与其他元素交互的区域。

- 总结：
    BFC(block formatting context)块级格式化上下文，它是页面中的一块独立的渲染区域，并且有一套属于自己的渲染规则，它决定了内部元素如何进行布局，以及与其他元素的关系和相互作用。

- <strong>BFC可以看做是一个独立的布局容器，BFC内部的元素布局与外部互不影响</strong>

## BFC布局规则
  1. 内部的Box会在垂直方向一个接着一个地放置。
  2. Box垂直方向上的距离由margin决定。属于同一个BFC的两个相邻的Box的margin会发生重叠。
  3. 每个盒子的左外边框紧挨着包含块的左边框，即使浮动元素也是如此。
  4. BFC的区域不会与浮动元素重叠。
  5. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。
  6. 计算BFC的高度时，浮动子元素也参与计算。

## 如何触发BFC
  常用触发BFC的方法
  - 根元素：body
  - float：left，right
  - position：absolute，fixed
  - overflow：auto，scroll，hidden
  - display：inline-block，table-cell，flex

  - <strong>[官网文档](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)</strong>