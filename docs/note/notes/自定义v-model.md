- 自定义v-model
- 父组件内
``` html
<template>
  <div id="app">
    <Input @change="change" :text="text"/>
  </div>
</template>
```
```js
<script>
import Input from './components/Input.vue'

export default {
  name: 'App',
  components: {
    Input
  },
  data () {
    return {
      text: 'cc'
    }
  },
  methods: {
    change(text) {
      this.text = text;
    }
  }
}
</script>
```
- 子组件内
```html
<template>
  <div class="input">
    <p>{{text}}</p>
    <input :value="text1" type="text" @input="$emit('change1',$event.target.value)">
  </div>
  <!-- 
    1. 使用:value而不是v-model
    2. change1跟model.change1对应
    3. text1属性对应
   -->
</template>
```
```js
<script>
export default {
  name: 'Input',
  model: {
    prop: 'text1',
    event: 'change1'
  },
  props: {
    text1: {
      type: String,
      default: ''
    }
  }
}
</script>
```
