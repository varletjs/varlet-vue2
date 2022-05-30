# BottomNavigation

### Install

```js
import Vue from 'vue'
import { BottomNavigation, BottomNavigationItem } from '@varlet-vue2/ui'

Vue.use(BottomNavigation).use(BottomNavigationItem)
```

### Basic Usage

```html
<var-bottom-navigation v-model:active="active">
  <var-bottom-navigation-item label="label" icon="home" />
  <var-bottom-navigation-item label="label" icon="magnify" />
  <var-bottom-navigation-item label="label" icon="heart" />
  <var-bottom-navigation-item label="label" icon="account-circle" />
</var-bottom-navigation>
```

```js
export default {
  data: () => ({
    active: 0
  })
}
```

### Match by name

```html
<var-bottom-navigation v-model:active="active">
  <var-bottom-navigation-item name="home" label="label" icon="home" />
  <var-bottom-navigation-item name="search" label="label" icon="magnify" />
  <var-bottom-navigation-item name="heart" label="label" icon="heart" />
  <var-bottom-navigation-item name="user" label="label" icon="account-circle" />
</var-bottom-navigation>
```

```js
export default {
  data: () => ({
    active: 0
  })
}
```

### Show Badge

```html
<var-bottom-navigation v-model:active="active">
  <var-bottom-navigation-item label="label" icon="home" />
  <var-bottom-navigation-item label="label" icon="magnify" badge />
  <var-bottom-navigation-item label="label" icon="heart" :badge="badgeProps" />
  <var-bottom-navigation-item label="label" icon="account-circle" />
</var-bottom-navigation>
```

```js
export default {
  data: () => ({
    active: 0,
    badgeProps: {
      type: 'primary',
      value: '66'
    }
  })
}
```

### Custom Color

```html
<var-bottom-navigation active-color="#ba68c8" v-model:active="active">
  <var-bottom-navigation-item label="label" icon="home" />
  <var-bottom-navigation-item label="label" icon="magnify" />
  <var-bottom-navigation-item label="label" icon="heart" />
  <var-bottom-navigation-item label="label" icon="account-circle" />
</var-bottom-navigation>
```

```js
export default {
  data: () => ({
    active: 0
  })
}
```

### Change Event

```html
<var-bottom-navigation v-model:active="active" @change="handleChange">
  <var-bottom-navigation-item label="label" icon="home" />
  <var-bottom-navigation-item label="label" icon="magnify" />
  <var-bottom-navigation-item label="label" icon="heart" />
  <var-bottom-navigation-item label="label" icon="account-circle" />
</var-bottom-navigation>
```

```js
import { Snackbar } from '@varlet-vue2/ui'

export default {
  data: () => ({
    active: 0
  }),
  methods: {
    handleChange(active) => {
      Snackbar.info(`changed to ${active}`)
    }
  }
}
```

### Click Event

```html
<var-bottom-navigation v-model:active="active">
  <var-bottom-navigation-item @click="handleClick" label="label" icon="home" />
  <var-bottom-navigation-item @click="handleClick" label="label" icon="magnify" />
  <var-bottom-navigation-item @click="handleClick" label="label" icon="heart" />
  <var-bottom-navigation-item @click="handleClick" label="label" icon="account-circle" />
</var-bottom-navigation>
```

```js
import { Snackbar } from '@varlet-vue2/ui'

export default {
  data: () => ({
    active: 0
  }),
  methods: {
    handleClick(active) => {
      Snackbar.info(`clicked ${active}`)
    }
  }
}
```

### Fab

```html
<var-bottom-navigation
  class="bottom-navigation-example"
  v-model:active="active"
  @fab-click="isEven = !isEven"
>
  <template #fab>
    <var-icon name="heart" />
  </template>
  <var-bottom-navigation-item label="label" icon="home" />
  <var-bottom-navigation-item label="label" icon="magnify" />
  <var-bottom-navigation-item label="label" icon="heart" />
  <var-bottom-navigation-item label="label" icon="bell" />
  <var-bottom-navigation-item v-if="!isEven" label="label" icon="account-circle" />
</var-bottom-navigation>
```

```js
export default {
  data: () => ({
    active: 0,
    isEven: true
  })
}
```

```css
.bottom-navigation-example {
  margin-top: 40px;
}
```


## API

### Props

#### BottomNavigation Props

| Prop            | Description                                         | Type | Default |
|-----------------|-----------------------------------------------------| ---- | ---- |
| `active.sync` | Identifier of current tab                           | _number \| string_ | `0` |
| `fixed`         | 	Whether to fixed bottom                            | _boolean_ | `false` |
| `border`        | Whether to show border                              | _boolean_ | `false` |
| `z-index`       | Z-index                                             | _number \| string_ | `1` |
| `active-color`  | Color of active tab item                            | _string_ | `-` |
| `inactive-color` | Color of inactive tab item                          | _string_ | `-` |
| `fab-props`     | Fab button props                                    | _ButtonProps_ | `{type: "primary"}` |

#### BottomNavigationItem Props

|Prop | Description | Type | Default |
| ---- | ---- | ---- | ---- |
| `name` | Identifier | _string_ | `-` |
| `icon` | Icon name, equivalent to the [name](/#/en-US/icon) of Icon component | _string_ | `-` |
| `label` | Label text content | _string_ | - |
| `namespace` | Icon namespace, extensible custom icon library, equivalent to the [namespace](/#/en-US/icon)  of Icon component | _string_ | `var-icon` |
| `badge` | Logo in the upper right corner of the icon | _boolean \| BadgeProps_ | `false` |

### Events

#### BottomNavigation Events

|Event | Description | Arguments |
| ---- | ---- | ---- |
| `before-change` | The callback function before switching labels, which returns false to prevent switching, supports the return of promise | `active: number \| string` |
| `change` | Triggered when switching labels | `active: number \| string` |
| `fab-click` | Triggered when fab button click | `-` |

#### BottomNavigationItem Events

|Event | Description | Arguments |
| ---- | ---- | ---- |
| `click` | Trigger on click | `active: number \| string` |

### Slots

#### BottomNavigation Slots

| Slot | Description | Arguments |
| ---- | ---- | ----|
| `fab` | Support for inserting a custom Fab button into a component | `-` |
#### BottomNavigationItem Slots

| Slot | Description | Arguments |
| ---- | ---- | ----|
| `default` | Custom label text content that overwrites the content of `label`  | `-` |
| `icon` | Custom Icon | `active: boolean` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

#### BottomNavigation Variables

| Variable | Default |
| --- | --- |
| `--bottom-navigation-height` | `50px` |
| `--bottom-navigation-z-index` | `1` |
| `--bottom-navigation-background-color` | `#fff` |
| `--bottom-navigation-border-color` | `#bcc2cb` |
| `--bottom-navigation-fab-offset` | `4px` |

#### BottomNavigationItem Variables

| Variable | Default |
| --- | --- |
| `--bottom-navigation-item-font-size` | `var(--font-size-sm)` |
| `--bottom-navigation-item-inactive-color` | `#646566` |
| `--bottom-navigation-item-active-color` | `var(--color-primary)` |
| `--bottom-navigation-item-active-background-color` | `#fff` |
| `--bottom-navigation-item-line-height` | `1` |
| `--bottom-navigation-item-icon-size` | `22px` |
| `--bottom-navigation-item-icon-margin-bottom` | `5px` |
