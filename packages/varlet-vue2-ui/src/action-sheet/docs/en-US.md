# ActionSheet

### Intro

An action sheet pops up to give the user the ability to select options.
`ActionSheet` Functional and component use methods are provided, and there is no essential difference between the two effects and parameters.
The function returns a `Promise`，on selection return `action`，Click modal close to return `close`.

### Install

```js
import Vue from 'vue'
import { ActionSheet } from '@varlet-vue2/ui'

Vue.use(ActionSheet)
```

### Scoped Install

```js
import { ActionSheet } from '@varlet-vue2/ui'

export default {
  components: {
    [ActionSheet.Component.name]: ActionSheet
  }
}
```

## Functional

### Basic Use

```js
import { Snackbar } from '@varlet-vue2/ui'

const action = await ActionSheet({
  actions: [
    {
      name: 'Item 01',
      icon: 'account-circle',
    },
    {
      name: 'Item 02',
      icon: 'notebook',
    },
    {
      name: 'Item 03',
      icon: 'wifi',
    }
  ]
})

action !== 'close' && Snackbar(`Your selected is:${action.name}`)
```

### Modify Title

```js
ActionSheet({
  actions: [
    {
      name: 'Item 01',
      icon: 'account-circle',
    },
    {
      name: 'Item 02',
      icon: 'notebook',
    },
    {
      name: 'Item 03',
      icon: 'wifi',
    }
  ],
  title: 'Choose whichever you like'
})
```

### Action Disabled

The option is passed `disabled` to leave the action in the disabled state

```js
ActionSheet({
  actions: [
    {
      name: 'Item 01',
      icon: 'account-circle',
    },
    {
      name: 'Item 02',
      icon: 'notebook',
    },
    {
      name: 'Item 03',
      icon: 'wifi',
      disabled: true,
    },
  ]
})
```

### Disable Close On Click Action

Passing in `CloseOnClickAction` disallows the action of `ActionSheet` closing automatically when the option is selected. The user can select the action multiple times. Because `Promise` is only resolved once, it is recommended to use `onSelect` to listen for the action of the user

```js
import { Snackbar } from '@varlet-vue2/ui'

ActionSheet({
  actions: [
    {
      name: 'Item 01',
      icon: 'account-circle',
    },
    {
      name: 'Item 02',
      icon: 'notebook',
    },
    {
      name: 'Item 03',
      icon: 'wifi',
    },
  ],
  closeOnClickAction: false,
  onSelect: action => Snackbar(`Your selected is:${action.name}`),
})
```

### Custom Action Styles

Options provide parameters to configure the style. See the `Action` data structure for options

```js
import { Snackbar } from '@varlet-vue2/ui'

ActionSheet({
  actions: [
    {
      name: 'Item 01',
      icon: 'account-circle',
      color: '#00c48f',
    },
    {
      name: 'Item 02',
      icon: 'notebook',
      color: '#ff9800',
    },
    {
      name: 'Item 03',
      icon: 'wifi',
      color: '#00afef',
    },
  ]
})
```

## Component Call

### Basic Usage

```html
<var-button type="warning" block @click="show = true">Basic Usage</var-button>
<var-action-sheet 
  :actions="actions"
  :show.sync="show"
  @select="handleSelect"
/>
```

```js
import { Snackbar } from '@varlet-vue2/ui'

export default {
  data: () => ({
    show: false,
    actions: [
      {
        name: 'Item 01',
        icon: 'account-circle',
      },
      {
        name: 'Item 02',
        icon: 'notebook',
      },
      {
        name: 'Item 03',
        icon: 'wifi',
      },
    ]
  }),
  methods: {
    handleSelect(action) {
      Snackbar(`Your selected is:${action.name}`)
    }
  }
}
```

### Modify Title

```html
<var-button type="warning" block @click="show = true">Modify Title</var-button>
<var-action-sheet 
  title="Choose whichever you like" 
  :actions="actions" 
  :show.sync="show" 
  @select="handleSelect" 
/>
```

```js
import { Snackbar } from '@varlet-vue2/ui'

export default {
  data: () => ({
    show: false,
    actions: [
      {
        name: 'Item 01',
        icon: 'account-circle',
      },
      {
        name: 'Item 02',
        icon: 'notebook',
      },
      {
        name: 'Item 03',
        icon: 'wifi',
      },
    ]
  }),
  methods: {
    handleSelect(action) {
      Snackbar(`Your selected is:${action.name}`)
    }
  }
}
```

### Action Disabled

```html
<var-button type="warning" block @click="show = true">Action Disabled</var-button>
<var-action-sheet 
  :actions="actions" 
  :show.sync="show"
  @select="handleSelect" 
/>
```

```js
import { Snackbar } from '@varlet-vue2/ui'

export default {
  data: () => ({
    show: false,
    actions: [
      {
        name: 'Item 01',
        icon: 'account-circle',
      },
      {
        name: 'Item 02',
        icon: 'notebook',
      },
      {
        name: 'Item 03',
        icon: 'wifi',
        disabled: true,
      },
    ]
  }),
  methods: {
    handleSelect(action) {
      Snackbar(`Your selected is:${action.name}`)
    }
  }
}
```

### Disable close on click action

```html
<var-button type="warning" block @click="show = true">Disable close on click action</var-button>
<var-action-sheet 
  :close-on-click-action="false"
  :actions="actions" 
  :show.sync="show" 
  @select="handleSelect"
/>
```

```js
import { Snackbar } from '@varlet-vue2/ui'

export default {
  data: () => ({
    show: false,
    actions: [
      {
        name: 'Item 01',
        icon: 'account-circle',
      },
      {
        name: 'Item 02',
        icon: 'notebook',
      },
      {
        name: 'Item 03',
        icon: 'wifi',
      },
    ]
  }),
  methods: {
    handleSelect(action) {
      Snackbar(`Your selected is:${action.name}`)
    }
  }
}
```

### Custom Action Styles

```html
<var-button type="warning" block @click="show = true">Custom Action Styles</var-button>
<var-action-sheet 
  :close-on-click-action="false"
  :actions="actions" 
  :show.sync="show" 
  @select="handleSelect"
/>
```

```js
import { Snackbar } from '@varlet-vue2/ui'

export default {
  data: () => ({
    show: false,
    actions: [
      {
        name: 'Item 01',
        icon: 'account-circle',
        color: '#00c48f',
      },
      {
        name: 'Item 02',
        icon: 'notebook',
        color: '#ff9800',
      },
      {
        name: 'Item 03',
        icon: 'wifi',
        color: '#00afef',
      },
    ]
  }),
  methods: {
    handleSelect(action) {
      Snackbar(`Your selected is:${action.name}`)
    }
  }
}
```


## API

### Props

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `show.sync` | Whether to display the action sheet | _boolean_ | `false` |
| `actions` | Action list | _Actions_ | `[]` |
| `title` | Action sheet title | _string_ | `Select One` |
| `overlay` | Whether to display the overlay | _boolean_ | `true` |  
| `overlay-class` | Custom overlay class | _string_ | `-` |
| `overlay-style` | Custom overlay style | _object_ | `-` |
| `lock-scroll` | Whether to disable scrolling penetration, scrolling the Dialog when disabled will not cause the body to scroll | _boolean_ | `true` |
| `close-on-click-action` | Whether to close the actions sheet when clicking action | _boolean_ | `true` |
| `close-on-click-overlay` | Whether to click the overlay to close the action sheet | _boolean_ | `true` | 
| `teleport` | The location of the action sheet to mount | _TeleportProps['to']_ | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `select` | Triggered when the action is click | `action: Action` |
| `open` | Triggered when the action sheet is open | `-` |
| `opened` | Triggered when the action sheet open-animation ends | `-` |
| `close` | Triggered when the action sheet is close | `-` |
| `closed` | Triggered when the action sheet close-animation ends | `-` |
| `click-overlay` | Triggered when you click on overlay | `-` |

### ActionSheet Options
#### Options passed in for a functional call

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `title` | Action sheet title | _string_ | `Select One` |
| `overlay` | Whether to display the overlay | _boolean_ | `true` |  
| `overlayClass` | Custom overlay class | _string_ | `-` |
| `overlayStyle` | Custom overlay style | _object_ | `-` |
| `lockScroll` | Whether to disable scrolling penetration, scrolling the action sheet when disabled will not cause the body to scroll | _boolean_ | `true` |
| `closeOnClickOverlay` | Whether to click the overlay to close the action sheet | _boolean_ | `true` |
| `onOpen` | Action sheet open callback | _() => void_ | `-` |
| `onOpened` | Action sheet open-animation ends callback | _() => void_ | `-` |
| `onClose` | Action sheet close callback | _() => void_ | `-` |
| `onClosed` |Action sheet close-animation ends callback | _() => void_ | `-` |
| `onSelect` | Action sheet click action callback | _(action: Action) => void_ | `-` |
| `onClickOverlay` | Click overlay callback | _() => void_ | `-` |

### ActionSheet Action

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `name` | Action name | _string_ | `-` |
| `color` | Action text color | _string_ | `-` |  
| `icon` | Icon，support network image address | _string_ | `-` |
| `iconSize` | Icon size | _string_ | `-` |
| `className` | Class name | _string_ | `-` |
| `disabled` | Disable or not option | _boolean_ | `false` |

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `actions` | Action list | `-` |
| `title` | Action sheet title | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--action-sheet-border-radius` | `2px` |
| `--action-sheet-background` | `#fff` |
| `--action-sheet-title-color` | `#888` |
| `--action-sheet-title-padding` | `10px 16px` |
| `--action-sheet-title-font-size` | `14px` |
| `--action-sheet-action-item-height` | `48px` |
| `--action-sheet-action-item-padding` | `0px 18px` |
| `--action-sheet-action-item-color` | `#333` |
| `--action-sheet-action-item-disabled-color` | `var(--color-text-disabled)` |
| `--action-sheet-icon-margin` | `0 0 20px 0` |
| `--action-sheet-icon-size` | `24px` |