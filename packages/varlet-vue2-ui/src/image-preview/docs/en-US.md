# ImagePreview

### Intro

Image-Preview, Support double-click magnification, Support function call and component call two ways.

### Install

```js
import Vue from 'vue'
import { ImagePreview } from '@varlet-vue2/ui'

Vue.use(ImagePreview)
```

### Scoped Install
```js
import Vue from '@varlet-vue2/ui'

// partial registration
export default {
  components: {
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
}
```

### Function Call

#### Basic Usage

```js
ImagePreview('https://varlet-vue2.vercel.app/cat.jpg')
```

#### Call Back
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


## Component Call

### Basic Use

```html
<var-button
  type="warning"
  block
  @click="show = true"
>
  Basic Use
</var-button>
<var-image-preview :images="images" :show.sync="show" />

<var-button 
  type="warning" 
  block
  @click="currentShow = true"
>
  Specify initial position
</var-button>
<var-image-preview
  current="https://varlet-vue2.vercel.app/cat2.jpg"
  :images="images"
  :show.sync="currentShow" 
/>

<var-button 
  type="warning" 
  block 
  @click="closeShow = true"
>
  Display the close button
</var-button>
<var-image-preview
  closeable
  :images="images"
  :show.sync="closeShow" 
/>

<var-button
  block
  type="warning"
  @click="closeEventShow = true"
>
  Listen for close event
</var-button>
<var-image-preview 
  :images="images"
  :show.sync="closeEventShow"
  @close="handleCloseEvent" 
/>

<var-button
  type="warning"
  block
  @click="extraSlotsShow = true"
>
  Show extra slots
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
        name: 'operate',
        icon: 'wrench'
      },
      {
        name: 'operate',
        icon: 'wrench'
      }
    ]
  }),
  methods: {
    handleCloseEvent() {
      Snackbar('The shutdown event was triggered.')
    }
  }
}
```


## API

### Props

| Prop         | Description   | Type  | Default  |
| ------------ | ------------ | ------------------ | ------------ |
| `show`       | Whether or display | _boolean_ | `false` |
| `images`     | Need to preview the image URL | _string[]_ | `[]` |
| `current`    | URL from which the image preview starts | _string_ | `-` |
| `zoom`       | Double-click to zoom in | _string \| number_ | `2` |
| `closeable`  | Whether to show the close button | _boolean_ | `false` |
| `loop`       | Whether to open loop playback | _boolean_ | `true` |
| `indicator`  | Whether to show paging | _boolean_ | `true` |
| `lock-scroll` | Lock scroll | _boolean_ | `true` |
| `teleport`   | The location of the pop-up layer to mount | _TeleportProps['to']_ | `-` |

### Events

| Event | Description | Arguments |
| ----- | ---- | ----- |
| `change` | The callback function when switching images, the callback parameter is the current index | `index: number` Image indexing |
| `open`   | Triggered when Image-Preview is turned on | `-`  |
| `opened` | Triggered at the end of the open image-preview animation | `-` |
| `close`  | Triggered when Image-Preview is off | `-` |
| `closed` | Triggered when the animation that closes the image-preview ends | `-` |

### Slot

| Slot | Description | Arguments |
| --- | --- | --- |
| `indicator` | Paging indicator | `index: number` Image indexing <br> `length: number` Total number of image |
| `close-icon` | Close button | `-` |
| `extra` | Extra slots | `-` |

### ImagePreview Options

| Prop   | Description  |  Type  | Default |
| ------ | ----------- | ------ | -------- |
| `images`     | The image URL array or the URL of a single image to be previewed | _string[] \| string_ | `[]` |
| `current`    | URL from which the image preview starts | _string_ | `-` |
| `zoom`       | Double-click to zoom in | _string \| number_ | `2` |
| `closeable`  | Whether to show the close button | _boolean_ | `false` |
| `loop`       | Whether to open loop playback | _boolean_ | `true` |
| `indicator`  | Whether to show paging | _boolean_ | `true` |
| `lockScroll` | Lock scroll | _boolean_ | `true` |
| `onChange`   | The callback function when switching images, the callback parameter is the current index | _(index: number) => void_  |  `-` |
| `onOpen`   | Callback when image-preview is turned on |  _() => void_ | `-` |
| `onOpened` | Callback at the end of the animation that opened image-preview |   _() => void_ | `-` |
| `onClose`  | Callback when image-preview is closed |  _() => void_ |  `-` |
| `onClosed` | Callback at the end of the animation that closes the image-preview |  _() => void_ | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
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
