# 菜单

### 介绍
使元素点击时显示一个菜单，通过控制菜单的对齐方式和偏移量自由的控制菜单的显示位置。

### 引入

```js
import Vue from 'vue'
import { Menu } from '@varlet-vue2/ui'

Vue.use(Menu)
```

### 注意
Menu 是一个 `inline-block` 元素，通过默认插槽点击时显示菜单，如果希望 Menu 独占一行推荐包裹一个 `block` 元素。
Menu 在点击组件范围以外的区域自动关闭，所以不可以使用同一个状态绑定多个 Menu 的 `show.sync`，否则在触发显示时也同时触发了其他 Menu 对 `show.sync` 的修改，导致 Menu 无法显示。

### 对齐方式
```html
<div class="block">
  <var-menu :show.sync="top">
    <var-button type="primary" @click="top = true">顶部对齐</var-button>

    <template #menu>
      <div class="cell-list">
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
      </div>
    </template>
  </var-menu>
</div>

<div class="block-mt">
  <var-menu alignment="bottom" :show.sync="bottom">
    <var-button type="primary" @click="bottom = true">底部对齐</var-button>

    <template #menu>
      <div class="cell-list">
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
      </div>
    </template>
  </var-menu>
</div>
```

```js
export default {
  data: () => ({
    top: false,
    bottom: false
  })
}
```

```css
.block {
  display: flex;
  justify-content: space-between;
}

.block-mt {
  margin-top: 130px;
}

.cell-list {
  background: #fff;
}
```

### 偏移量

```html
<div class="block-1">
  <var-menu :offset-x="72" :show.sync="offsetX">
    <var-button type="primary" @click="offsetX = true">右偏移</var-button>

    <template #menu>
      <div class="cell-list">
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
      </div>
    </template>
  </var-menu>

  <var-menu :offset-x="-72" :show.sync="offsetX1">
    <var-button type="primary" @click="offsetX1 = true">左偏移</var-button>

    <template #menu>
      <div class="cell-list">
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
      </div>
    </template>
  </var-menu>
</div>

<div class="block-2">
  <var-menu :offset-y="36" :show.sync="offsetY">
    <var-button type="primary" @click="offsetY = true">下偏移</var-button>

    <template #menu>
      <div class="cell-list">
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
      </div>
    </template>
  </var-menu>

  <var-menu :offset-y="-36" :show.sync="offsetY1">
    <var-button type="primary" @click="offsetY1 = true">上偏移</var-button>

    <template #menu>
      <div class="cell-list">
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
      </div>
    </template>
  </var-menu>
</div>
```


```js
export default {
  data: () => ({
    offsetX: false,
    offsetX1: false,
    offsetY: false,
    offsetY1: false
  })
}
```

```css
.block-1 {
  display: flex;
  justify-content: space-between;
}

.block-2 {
  display: flex;
  justify-content: space-between;
  margin-top: 130px;
}
```

### 注册事件

```html
<var-menu
  :show.sync="event"
  @open="menuOpen" 
  @opened="menuOpened"
  @close="menuClose"
  @closed="menuClosed"
>
  <var-button type="primary" @click="event = true">注册事件</var-button>

  <template #menu>
    <div class="cell-list">
      <var-cell>菜单项</var-cell>
      <var-cell>菜单项</var-cell>
      <var-cell>菜单项</var-cell>
    </div>
  </template>
</var-menu>
```

```js
import { Snackbar } from '@varlet-vue2/ui'

export default {
  data: () => ({
    event: false
  }),
  methods: {
    menuOpen() {
      Snackbar.info('open')
    },
    menuOpened() {
      Snackbar.success('opened')
    },
    menuClose() {
      Snackbar.warning('close')
    },
    menuClosed() {
      Snackbar.error('closed')
    },
  },
}
```

```css
.cell-list {
  background: #fff;
}
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `show.sync` | 是否显示菜单 | _string_ | `default` |
| `alignment` | 菜单的对齐方式， 可选值为 `top` `bottom`， 源点为默认插槽的左上角，top 为菜单顶部对齐源点，bottom 为菜单底部对齐 | _string_ | `top` |
| `offset-x` | x 轴偏移量， 相对于菜单对齐后的位置 | _number \| string_ | `0` |
| `offset-y` | y 轴偏移量， 相对于菜单对齐后的位置 | _number \| string_ | `0` |
| `teleport` | 菜单挂载的位置 | _TeleportProps['to']_ | `body` |

### 方法
| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `resize` | Menu 默认插槽元素产生位置大小变化时可以调用此方法进行重绘 | `-` | `-` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `open` | 打开菜单时触发 | `-` |
| `opened` | 打开菜单动画结束时触发 | `-` |
| `close` | 关闭菜单时触发 | `-` |
| `closed` | 关闭菜单动画结束时触发 | `-` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 菜单关联的触发元素 | `-` |
| `menu` | 菜单内容 | `-` |
