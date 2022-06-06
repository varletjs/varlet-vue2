# 图片预览

### 介绍

图片放大预览，支持双击倍数放大，支持函数调用和组件调用两种方式。

### 引入

```js
import Vue from 'vue'
import { ImagePreview } from '@varlet-vue2/ui'

Vue.use(ImagePreview)
```

### 局部引入
```js
import Vue from '@varlet-vue2/ui'

// 局部注册
export default {
  components: {
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
}
```

## 函数调用

### 基本使用

```js
ImagePreview('https://varlet-vue2.vercel.app/cat.jpg')
```

### 处理回调函数
```js
const images = [
  'https://varlet-vue2.vercel.app/cat.jpg',
  'https://varlet-vue2.vercel.app/cat2.jpg'
]

ImagePreview({
  images,
  onChange(index) {
    console.log(index)
  }
})
```


## 组件使用

### 基本使用

```html
<var-button
  type="warning"
  block
  @click="show = true"
>
  基本使用
</var-button>
<var-image-preview :images="images" v-model:show="show" />

<var-button
  type="warning"
  block
  @click="currentShow = true"
>
  指定初始位置
</var-button>
<var-image-preview
  current="https://varlet-vue2.vercel.app/cat2.jpg"
  :images="images"
  v-model:show="currentShow"
/>

<var-button
  type="warning"
  block
  @click="closeShow = true"
>
  展示关闭按钮
</var-button>
<var-image-preview
  closeable
  :images="images"
  v-model:show="closeShow"
/>

<var-button
  block
  type="warning"
  @click="closeEventShow = true"
>
  监听关闭事件
</var-button>
<var-image-preview
  :images="images"
  v-model:show="closeEventShow"
  @close="handleCloseEvent"
/>

<var-button
  type="warning"
  block
  @click="extraSlotsShow = true"
>
  显示额外插槽
</var-button>
<var-image-preview :images="images" :show.sync="extraSlotsShow">
  <template #extra>
    <var-icon 
      name="menu"
      :size="22"
      color="#fff"
      @click="menuShow = true"
    />
    <var-action-sheet :actions="actions" :show.sync="menuShow" />
  </template>
</var-image-preview>
```

```javascript
import { Snackbar } from '@varlet-vue2/ui'

export default {
  data: () => ({
    images: ['https://varlet-vue2.vercel.app/cat.jpg', 'https://varlet-vue2.vercel.app/cat2.jpg'],
    image: ['https://varlet-vue2.vercel.app/cat.jpg'],
    show: false,
    menuShow:false,
    currentShow: false,
    closeShow: false,
    closeEventShow: false,
    extraSlotsShow:false,
    actions: [
      {
        name: '操作',
        icon: 'wrench'
      },
      {
        name: '操作',
        icon: 'wrench'
      }
    ]
  }),
  methods: {
    handleCloseEvent() {
      Snackbar('触发了关闭事件。')
    }
  }
}
```


## API

### 属性

| 参数         | 说明   | 类型  | 默认值  |
| ------------ | ------------ | ------------------ | ------------ |
| `show`       | 是否显示     | _boolean_ | `false` |
| `images`     | 需要预览的图片 URL 数组 | _string[]_ | `[]` |
| `current`    | 图片预览起始的 URL | _string_ | `-` |
| `zoom`       | 双击放大倍数 | _string \| number_ | `2` |
| `closeable`  | 是否显示关闭按钮 | _boolean_ | `false` |
| `loop`       | 是否开启循环播放 | _boolean_ | `true` |
| `indicator`  | 是否显示分页 | _boolean_ | `true` |
| `lock-scroll` | 锁定滚动 | _boolean_ | `true` |
| `teleport`   | 弹出层挂载的位置 | _TeleportProps['to']_ | `-` |

### 事件

| 事件名 | 说明  | 回调参数 |
| ----- | ---- | ----- |
| `change` | 切换图片时的回调函数，回调参数为当前索引 | `index: number` 图片索引 |
| `open`   | 打开 image-preview 时触发 | `-`  |
| `opened` | 打开 image-preview 动画结束时触发 | `-` |
| `close`  | 关闭 image-preview 时触发 | `-` |
| `closed` | 关闭 image-preview 动画结束时触发 | `-` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `indicator` | 分页指示器 | `index: number` 图片索引 <br> `length: number` 图片总数 |
| `close-icon` | 关闭按钮 | `-` |
| `extra` | 额外插槽 | `-` |

### ImagePreview Options

| 参数   | 说明  |  类型  | 默认值 |
| ------ | ----------- | ------ | -------- |
| `images`     | 需要预览的图片 URL 数组或者单个图片的 URL  | _string[] \| string_ | `[]` |
| `current`    | 图片预览起始的 URL | _string_ | `-` |
| `zoom`       | 双击放大倍数  | _string \| number_ | `2` |
| `closeable`  | 是否显示关闭按钮 | _boolean_ | `false` |
| `loop`       | 是否开启循环播放 | _boolean_ | `true` |
| `indicator`  | 是否显示分页 | _boolean_ | `true` |
| `lockScroll` | 锁定滚动 | _boolean_ | `true` |
| `onChange`   | 切换图片时的回调函数，回调参数为当前索引 | _(index: number) => void_  |  `-` |
| `onOpen`   | image-preview 开启时候的回调 |  _() => void_ | `-` |
| `onOpened` | image-preview 动画结束时候的回调 |   _() => void_ | `-` |
| `onClose`  | image-preview 时关闭时候的回调 |  _() => void_ |  `-` |
| `onClosed` | image-preview 关闭动画结束时候的回调 |  _() => void_ | `-` |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider)进行样式定制

| 变量名  | 默认值   |
| ------ | -------- |
| `--image-preview-swipe-indicators-text-color` | `#ddd`  |
| `--image-preview-swipe-indicators-padding`    | `16px 0` |
| `--image-preview-zoom-container-background`   | `#000`  |
| `--image-preview-close-icon-top`              | `14px` |
| `--image-preview-close-icon-right`            | `14px` |
| `--image-preview-close-icon-size`             | `22px` |
| `--image-preview-close-icon-color`            | `#fff` |
| `--image-preview-extra-top`                   | `14px` |
| `--image-preview-extra-left`                  | `14px` |
