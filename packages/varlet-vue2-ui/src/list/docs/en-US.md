# List

### Intro
Unlimited scroll load list, touch bottom load, support manual check position load.
Support custom loading state, error state, data loading completed state.

### Install

```js
import Vue from 'vue'
import { List } from '@varlet-vue2/ui'

Vue.use(List)
```

### Basic Use

The `load` event is emitted when a scroll container is detected scrolling to the bottom，and will be set `loading.sync` to `true`, 
you need to manually set `loading.sync` to `false` at the end of loading, that's the end of the load.

```html
<var-list
  :finished="finished"
  :loading.sync="loading"
  @load="load"
>
  <var-cell :key="item" v-for="item in list">
    List Item: {{ item }}
  </var-cell>
</var-list>
```

```js
export default {
  data: () => ({
    loading: false,
    finished: false,
    list: [],
  }),
  methods:{
    load() {
      setTimeout(() => {
        for (let i = 0; i < 20; i++) {
          this.list.push(this.list.length + 1)
        }

        this.loading = false

        if (this.list.length >= 60) {
          this.finished = true
        }
      }, 1000)
    }
  }
}
```

### Load Fail

You can manually set the error status using `error.sync`, an error message is displayed.
Clicking on the error message will help you set the `error.sync` to `false` and trigger the `load` event again.

```html
<var-list
  :error.sync="error"
  :loading.sync="loading"
  @load="load"
>
  <var-cell :key="item" v-for="item in list">
    List Item: {{ item }}
  </var-cell>
</var-list>
```

```js
export default {
  data: () => ({
    loading: false,
    finished: false,
    list: [],
  }),
  methods:{
    load() {
      setTimeout(() => {
        if (this.list.length === 40) {
          this.error = true
          this.loading = false
          return
        }

        for (let i = 0; i < 20; i++) {
          this.list2.push(this.list.length + 1)
        }

        this.loading = false
      }, 1000)
    }
  }
}
```

### Tip Text

```html
<var-list 
  loading-text="loading QAQ" 
  finished-text="finished ORZ" 
  error-text="error TNT" 
  :finished="finished" 
  :loading.sync="loading" 
  @load="load"
>
  <var-cell :key="item" v-for="item in list">
    List Item: {{ item }}
  </var-cell>
</var-list>
```

```js
export default {
  data: () => ({
    loading: false,
    finished: false,
    list: [],
  }),
  methods:{
    load() {
      setTimeout(() => {
        for (let i = 0; i < 20; i++) {
          this.list.push(this.list.length + 1)
        }

        this.loading = false

        if (this.list.length >= 60) {
          this.finished = true
        }
      }, 1000)
    }
  }
}
```

### Be Careful
We detect bottoming by listening for the scroll event of the scroll container and perform the load.
A scroll container is the nearest element that `overflow-y='auto'` or `scroll`
When you set an element's `overflow-x` to a value other than `visible`, The browser will fix your `overflow-y` to `auto` in order to maintain a `BFC` structure.
This can be mistaken for a scroll container, so avoid it.

## API

### Props

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `loading.sync` | loading state | _boolean_ | `false` |
| `error.sync` | error state | _boolean_ | `false` |
| `immediate-check` | Whether the location is detected immediately when the List is initialized | _boolean_ | `true` |
| `finished` | Whether the load is complete | _boolean_ | `false` |
| `offset` | Trigger distance from the bottom | _string \| number_ | `0` |
| `loading-text` | Loading text | _string_ | `Loading` |
| `finished-text` | Finished text | _string_ | `No more` |
| `error-text` | Error text | _string_ | `Load fail` |

### Methods

| Method | Description | Arguments |
| --- | --- | --- |
| `check` | Trigger position check, touch bottom trigger load event | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `load` | Triggered when it hit bottom | `-` |

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | List content | `-` |
| `loading` | Loading content | `-` |
| `error` | Error content | `-` |
| `finished` | Finished content | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--list-loading-height` | `50px` |
| `--list-finished-height` | `50px` |
| `--list-error-height` | `50px` |
| `--list-loading-color` | `#888` |
| `--list-finished-color` | `#888` |
| `--list-error-color` | `#888` |
| `--list-loading-font-size` | `var(--font-size-md)` |
| `--list-finished-font-size` | `var(--font-size-md)` |
| `--list-error-font-size` | `var(--font-size-md)` |