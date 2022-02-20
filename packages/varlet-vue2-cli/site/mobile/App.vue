<template>
  <div class="site-mobile">
    <header>
      <var-site-app-bar class="app-bar" title-position="left" :title="bigCamelizeComponentName">
        <template #left>
          <var-site-button v-if="showBackIcon" text round @click="back" color="transparent" text-color="#fff">
            <var-site-icon name="chevron-left" :size="28" style="margin-top: 1px" />
          </var-site-button>
          <var-site-button
            v-if="!showBackIcon && github"
            style="margin-left: 2px"
            text
            round
            @click="toGithub"
            color="transparent"
            text-color="#fff"
          >
            <var-site-icon name="github" :size="28" style="margin-top: 1px" />
          </var-site-button>
        </template>
        <template #right>
          <var-site-button
            text
            round
            color="transparent"
            text-color="#fff"
            :style="{
              transform: languages ? 'translateX(2px)' : 'translateX(-4px)',
            }"
            v-if="darkMode"
            @click="toggleTheme"
          >
            <var-site-icon
              size="24px"
              color="#fff"
              :name="currentThemes === 'themes' ? 'white-balance-sunny' : 'weather-night'"
            />
          </var-site-button>
          <var-site-button
            style="padding-right: 6px"
            text
            color="transparent"
            text-color="#fff"
            @click.stop="showMenu = true"
            v-if="languages"
          >
            <var-site-icon name="translate" :size="24" />
            <var-site-icon name="chevron-down" :size="22" />
          </var-site-button>
        </template>
      </var-site-app-bar>
    </header>

    <div class="router-view__block">
      <router-view />
    </div>

    <transition name="site-menu">
      <div class="settings var-site-elevation--3" v-if="showMenu">
        <var-site-cell
          v-for="(value, key) in nonEmptyLanguages"
          :key="key"
          class="mobile-language-cell"
          :class="[language === key && 'mobile-language-cell--active']"
          v-ripple
          @click.native="changeLanguage(key)"
        >
          {{ value }}
        </var-site-cell>
      </div>
    </transition>
  </div>
</template>

<script>
import config from '@config'
import {
  bigCamelize,
  getBrowserThemes,
  inIframe,
  isPhone,
  removeEmpty,
  setThemes,
  watchLang,
  watchThemes
} from '../utils'
import { get } from 'lodash-es'

const themesKey = get(config, 'themesKey')

export default {
  data: () => ({
    language: '',
    languages: get(config, 'mobile.header.i18n'),
    showMenu: false,
    redirect: get(config, 'mobile.redirect', ''),
    currentThemes: getBrowserThemes(themesKey),
    bigCamelizeComponentName: '',
    showBackIcon: false,
    github: get(config, 'mobile.header.github'),
    darkMode: get(config, 'mobile.header.darkMode'),
  }),

  computed: {
    nonEmptyLanguages() {
      return removeEmpty(this.languages)
    }
  },

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

    watchLang(this, (newValue) => {
      this.language = newValue
    })
  },

  methods: {
    changeLanguage(lang) {
      this.language = lang
      this.showMenu = false
      window.location.href = `./mobile.html#${this.$route.path}?language=${this.language}&replace=${this.$route.query.replace}`

      if (!isPhone() && inIframe()) {
        window.top.scrollToMenu(this.redirect.slice(1))
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
    },

    back() {
      window.location.href = `./mobile.html#${this.redirect}?language=${this.language}&replace=${this.redirect.slice(1)}`

      if (!isPhone() && inIframe()) {
        window.top?.scrollToMenu(this.redirect.slice(1))
      }
    },

    toGithub() {
      if (inIframe() && !isPhone()) {
        window.top?.open(this.github)
      } else {
        window.location.href = this.github
      }
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

::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}

.site {
  &-menu-enter,
  &-menu-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
  &-menu-enter-active,
  &-menu-leave-active {
    transition-property: opacity, transform;
    transition-duration: 0.25s;
  }
}

header {
  position: fixed;
  z-index: 99;
  width: 100%;
  font-weight: bold;
}

.app-bar {
  background: var(--site-config-color-app-bar) !important;
}

.settings {
  position: fixed;
  z-index: 200;
  top: 48px;
  right: 5px;
  background: var(--site-config-color-bar);
}

.router-view__block {
  padding: 54px 12px 15px;
}

* {
  box-sizing: border-box;
}

.mobile-language-cell {
  color: var(--site-config-color-text);
  background: var(--site-config-color-bar);
  cursor: pointer;

  &--active {
    color: var(--site-config-color-mobile-language-active);
    background: var(--site-config-color-mobile-language-active-background);
  }
}
</style>
