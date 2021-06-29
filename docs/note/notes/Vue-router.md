## 动态路由

- 动态路由参数以冒号开头

```js
const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { name: "user", path: "/user/:id", component: User },
  ],
});
```
- 编程式导航跳转
```js
this.$router.push({name: 'user', params: {id: '1'}});
this.$router.push({path: `/user/${'1'}`});
```
- 路由传惨query
```js
// 带查询参数，变成 /list?id=1
router.push({ path: 'list', query: { id: '1' }})
```
- 获取参数
```js
this.$route.params.id
```
- 使用动态路由参数变化时，<strong>原来的组件实例会被复用</strong>。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。<strong>这也意味着组件的生命周期钩子不会再被调用。</strong>
- 使用watch监听$route对象的变化，或者使用导航守卫beforeRouteUpdate()
```js
watch: {
  $route() {
    this.id = this.$route.params.id;
  }
}
```
- 导航守卫
```js
beforeRouteUpdate(to, from, next) {
  this.id = to.params.id;
  next();
}
```
