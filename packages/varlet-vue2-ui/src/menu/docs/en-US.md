# Menu

### Intro

Enable elements to display a menu when clicked, freely control the display position of the menu by controlling the alignment and offset of the menu.

### Install

```js
import Vue from 'vue'
import { Menu } from '@varlet-vue2/ui'

Vue.use(Menu)
```

### Attention

Menu is an `inline block` element. When you click through the default slot, the menu will be displayed.
If you want menu to monopolize a line, it is recommended to package a `block` element
Menu is automatically closed in the area beyond the scope of the component,
so you can't use the same state to bind `show.sync`. Otherwise, when the display is triggered,
other menu pairs are also triggered Menu cannot be displayed due to the modification of `show.sync`.


### Alignment Methods
```html
<div class="block">
  <var-menu :show.sync="top">
    <var-button type="primary" @click="top = true">Top Alignment</var-button>

    <template #menu>
      <div class="cell-list">
        <var-cell>Menu Option</var-cell>
        <var-cell>Menu Option</var-cell>
        <var-cell>Menu Option</var-cell>
      </div>
    </template>
  </var-menu>
</div>

<div class="block-mt">
  <var-menu alignment="bottom" :show.sync="bottom">
    <var-button type="primary" @click="bottom = true">Bottom Alignment</var-button>

    <template #menu>
      <div class="cell-list">
        <var-cell>Menu Option</var-cell>
        <var-cell>Menu Option</var-cell>
        <var-cell>Menu Option</var-cell>
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

### Offset

```html
<div class="block-1">
  <var-menu :offset-x="72" :show.sync="offsetX">
    <var-button type="primary" @click="offsetX = true">Offset Right</var-button>

    <template #menu>
      <div class="cell-list">
        <var-cell>Menu Option</var-cell>
        <var-cell>Menu Option</var-cell>
        <var-cell>Menu Option</var-cell>
      </div>
    </template>
  </var-menu>

  <var-menu :offset-x="-72" :show.sync="offsetX1">
    <var-button type="primary" @click="offsetX1 = true">Offset Left</var-button>

    <template #menu>
      <div class="cell-list">
        <var-cell>Menu Option</var-cell>
        <var-cell>Menu Option</var-cell>
        <var-cell>Menu Option</var-cell>
      </div>
    </template>
  </var-menu>
</div>

<div class="block-2">
  <var-menu :offset-y="36" :show.sync="offsetY">
    <var-button type="primary" @click="offsetY = true">Offset Bottom</var-button>

    <template #menu>
      <div class="cell-list">
        <var-cell>Menu Option</var-cell>
        <var-cell>Menu Option</var-cell>
        <var-cell>Menu Option</var-cell>
      </div>
    </template>
  </var-menu>

  <var-menu :offset-y="-36" :show.sync="offsetY1">
    <var-button type="primary" @click="offsetY1 = true">Offset Top</var-button>

    <template #menu>
      <div class="cell-list">
        <var-cell>Menu Option</var-cell>
        <var-cell>Menu Option</var-cell>
        <var-cell>Menu Option</var-cell>
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
  <var-button type="primary" @click="event = true">Events</var-button>

  <template #menu>
    <div class="cell-list">
      <var-cell>Menu Option</var-cell>
      <var-cell>Menu Option</var-cell>
      <var-cell>Menu Option</var-cell>
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

### Props

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `show.sync` | Whether to display the menu | _string_ | `default` |
| `alignment` | The alignment of the menu, The optional value is' `top` `bottom`, the origin is the top left corner of the default slot,top is the top of the menu to align the origin,bottom is the bottom of the menu to align the origin | _string_ | `top` |
| `offset-x` | offset x, Relative to the aligned position of the menu | _number \| string_ | `0` |  
| `offset-y` | offset y, Relative to the aligned position of the menu | _number \| string_ | `0` |
| `teleport` | The location of the Menu to mount | _TeleportProps['to']_ | `body` |

### Methods
| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `resize` | You can call this method to redraw when a default slot element changes position size | `-` | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `open` | Triggered when the menu is open | `-` |
| `opened` | Triggered when open-animation ends | `-` |
| `close` | Triggered when the menu is close | `-` |
| `closed` | Triggered when close-animation ends | `-` |

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | The trigger element associated with the menu | `-` |
| `menu` | Menu content | `-` |