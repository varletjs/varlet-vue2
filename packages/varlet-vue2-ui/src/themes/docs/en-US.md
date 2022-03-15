# Dark Mode

### Intro

The first party of the component library provides the theme of dark mode.
The advantage of dark mode is that it has higher readability in low light environments.

### Toggle Theme

```html
<var-button block @click="toggleTheme">Toggle Theme</var-button>
```

```js
import dark from '@varlet-vue2/ui/es/themes/dark'
import { StyleProvider } from '@varlet-vue2/ui'

export default {
  data: () => ({
    currentTheme: null
  }),
  
  methods: {
    toggleTheme() {
      this.currentTheme = this.currentTheme ? null : dark
      StyleProvider(this.currentTheme)
    }
  },
}
```

Inject the `text color` and `background color` variables recommended by the component library to control the overall color

```less
body {
  transition: background-color .25s;
  color: var(--color-text);
  background-color: var(--color-body);
}
```
