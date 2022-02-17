<template>
  <div class="site-mobile">
    <header>
      <button @click="toggleTheme">Toggle Themes</button>
      <button @click="changeLanguage('en-US')">English</button>
      <button @click="changeLanguage('zh-CN')">Chinese</button>
    </header>

    <div class="router-view__block">
      <router-view />
    </div>
  </div>
</template>

<script>
import config from '@config'
import { bigCamelize, getBrowserThemes, inIframe, isPhone, setThemes, watchThemes } from '../utils'
import { get } from 'lodash-es'

const themesKey = get(config, 'themesKey')

export default {
  data: () => ({
    language: '',
    showMenu: false,
    redirect: get(config, 'mobile.redirect', ''),
    currentThemes: getBrowserThemes(themesKey),
    bigCamelizeComponentName: '',
    showBackIcon: false
  }),

  watch: {
    '$route.path'(to) {
      const componentName = bigCamelize(to.slice(1))
      const redirectName = bigCamelize(this.redirect.slice(1))
      this.bigCamelizeComponentName = componentName === redirectName ? '' : componentName
      this.showBackIcon = componentName !== redirectName
    }
  },

  created(newValue) {
    this.language = newValue

    window.toggleTheme = this.toggleTheme

    setThemes(config, this.currentThemes)

    window.postMessage(this.getThemesMessage(), '*')

    document.body.addEventListener('click', () => {
      this.showMenu = false
    })

    watchThemes(this, (themes, from) => {
      from === 'pc' && this.setCurrentThemes(themes)
    })
  },

  methods: {
    changeLanguage(lang) {
      this.language = lang
      this.showMenu = false
      window.location.href = `./mobile.html#${this.$route.path}?language=${this.language}&replace=${this.$route.query.replace}`

      if (!isPhone() && inIframe()) {
        window.top.scrollToMenu(redirect.slice(1))
      }
    },

    setCurrentThemes(themes) {
      this.currentThemes = themes
      setThemes(config, this.currentThemes)
      window.localStorage.setItem(themesKey, this.currentThemes)
    },

    toggleTheme() {
      this.setCurrentThemes(this.currentThemes === 'darkThemes' ? 'themes' : 'darkThemes')
      window.postMessage(this.getThemesMessage(), '*')

      if (!isPhone() && inIframe()) {
        window.top.postMessage(this.getThemesMessage(), '*')
      }
    },

    getThemesMessage() {
      return { action: 'themesChange', from: 'mobile', data: this.currentThemes }
    }
  }
}
</script>

<style lang="less">
* {
  -webkit-font-smoothing: antialiased;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  font-family: 'Roboto', sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: var(--site-config-color-bar);
  color: var(--site-config-color-text);
  transition: background-color 0.25s, color 0.25s;
}

header {
  position: fixed;
  z-index: 99;
  width: 100%;
  font-weight: bold;
}

::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}

.router-view__block {
  padding: 54px 12px 15px;
}

* {
  box-sizing: border-box;
}
</style>
