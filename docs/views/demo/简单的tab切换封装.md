---
title: 简单的tab切换组件封装
categories:
- demo
tag:
- tab组件
---
## tab.js
``` js
import './global.less';
import './index.less';  

const Tab = ((doc) => {
  /**
   * 创建Tab标签函数
   * @param {string} id - 父元素Id值
   * @param {string[]} texts - Item的内容
   * @param {number} defaultKey - 默认选中
   * @param {Function} onClickItem - 点击Item的回调
   */
  function Tab(
    id,
    texts,
    defaultKey,
    onClickItem
  ) {
    this.id = id;
    this.texts = texts;
    this.defaultKey = defaultKey;
    this.onClickItem = onClickItem;

    /** 初始化 */
    this.init();
  }

  /** 初始化 */
  Tab.prototype.init = function () {
    /** 创建根节点信息 */
    this.createRootNode();
    /** 创建Item */
    this.createItem();
    /** 点击事件-代理 */
    this.handleProxyClickItem();

    /** 默认点击 */
    this.handleClickDefaultKey();
  };

  /** 创建根节点信息 */
  Tab.prototype.createRootNode = function () {
    /** 获取基本节点 */
    const oTab = doc.getElementById(this.id);
    /** 添加Class */
    oTab.classList.add('flex-center');
    /** 挂载this */
    this.oTab = oTab;
  };

  /** 创建Item */
  Tab.prototype.createItem = function () {
    /** 创建文档碎片 */
    const oFragment = doc.createDocumentFragment();
    for (const text of this.texts) {
      /** 创建oItem节点 */
      const oItem = doc.createElement('div');
      /** 添加 Class */
      oItem.classList.add('flex-1', 'flex-center', 'h-100', 'border-bottom', 'tab-item');
      /** 设置 Key */
      oItem.setAttribute('key', this.texts.indexOf(text));
      /** 设置内容 */
      oItem.innerText = text;
      /** 添加点击事件 */
      // oItem.addEventListener('click', this.handleClickItem.bind(this), false);
      /** 添加到页面碎片 */
      oFragment.appendChild(oItem);
    }

    /** 添加内容 */
    this.oTab.append(oFragment);
  };

  /** 点击事件 */
  Tab.prototype.handleClickItem = function (e) {
    /** 停止传递 */
    e.stopPropagation();
    /** 获取当前节点 */
    const target = e.target;
    /** 获取当前Key值*/
    const key = target.getAttribute('key');
    /** 不能重复点击 */
    if (key === this.key) return;
    /** 获取所有子元素 */
    const oItems = this.oTab.getElementsByClassName('tab-item');
    /** 移除所有选中的Class */
    oItems.forEach((oItem) => oItem.classList.remove('tab-item-active'));
    /** 添加选中效果 */
    target.classList.add('tab-item-active');
    /** 当前选中的key */
    this.key = key;
    /** 触发回调 */
    this.onClickItem(key);
  };

  /** 点击事件-代理版本 */
  Tab.prototype.handleProxyClickItem = function () {
    this.oTab.addEventListener('click', this.handleClickItem.bind(this), false);
  };

  /** 默认点击Key */
  Tab.prototype.handleClickDefaultKey = function () {
    const oItem = this.oTab.querySelector(`[key="${this.defaultKey}"]`);
    oItem.click();
  };

  /** 返回构造函数 */
  return Tab;
})(document);

export default Tab;
```

## index.less
``` less
#tab {
  width: 100%;
  height: 50px;

  .tab-item {
    &:not(:last-child) {
      border-right: 1px #000 solid;
    }

    &.tab-item-active {
      background-color: #000;
      color: #fff;
    }
  }
}
```

## global.less
``` less
@border-color: #999;

* {
  margin: 0;
  padding: 0;
}

.d-flex {
  display: flex;
}

.jusity-content-center {
  justify-content: center;
}

.align-items-center {
  align-items: center;
}

.align-items-stretch {
  align-items: stretch;
}

.flex-1 {
  flex: 1;
}

.flex-center {
  .d-flex;
  .jusity-content-center;
  .align-items-center;
}

.w-100 {
  width: 100%;
}

.h-100 {
  height: 100%;
}

.border {
  border: 1px @border-color solid;
}

.border-bottom {
  border-bottom: 1px @border-color solid;
}

```