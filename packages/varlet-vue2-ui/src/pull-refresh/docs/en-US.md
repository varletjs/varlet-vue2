# PullRefresh

### Intro

Provides a drop-down refresh interaction.

### install

  ```js
import Vue from 'vue'
import { PullRefresh } from '@varlet-vue2/ui'

Vue.use(PullRefresh)
```

### Basic Usage

The refresh event will be Emitted when pull refresh, you should set `v-model` to `true` at the beginning of the event
indicates that loading is under way, and setting `v-model` to `false` after completion indicates that loading is over.

```html
<var-pull-refresh v-model="isRefresh" @refresh="refresh">
  <var-cell
    v-for="(item, index) in data"
    :key="index"
    border
  >
    {{ item + ' ' + (index + 1) }}
  </var-cell>
</var-pull-refresh>
```

```javascript
const data1 = Array(10).fill('List Item')
const data2 = Array(10).fill('This is new List Item')

export default {
  data: () => ({
    isRefresh: false,
    data: data1
  }),
  methods: {
    refresh() {
      setTimeout(() => {
        this.data = this.data[0] === 'List Item' ? data2 : data1
        this.isRefresh = false
      }, 2000)
    }
  }
}
```

## API

### Props

| Prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `v-model` | Loading status | _boolean_ | `-` |
| `disabled` | Whether to disable pull refresh | _boolean_ | `false` |
| `animation-duration` | The duration of the animation to return to the initial position after loading(ms) | _string \| number_ | `300` |
| `success-duration` | Success text display duration(ms) | _string \| number_ | `2000` |
| `bg-color` | BackgroundColor of control | _string_ | `#005CAF` |
| `color` | color of control | _string_ | `#ffffff` |
| `success-bg-color` | BackgroundColor of control when the status is success | _string_ | `#4CAF50` |
| `success-color` | color of control when the status is success | _string_ | `ffffff` |

### Events

| Event | Description | arguments |
| ----- | -------------- | -------- | 
| `refresh` | Emitted after pulling refresh | `-` |

### Slots

| Name | Description | SlotProps |
| ----- | -------------- | -------- | 
| `default` | Default slot | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--pull-refresh-size` | `40px` |
| `--pull-refresh-background` | `#fff` |
| `--pull-refresh-color` | `var(--color-primary)` |
| `--pull-refresh-success-color` | `var(--color-success)` |
| `--pull-refresh-icon-size` | `25px` |
