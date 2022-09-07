<template>
  <div class="varlet-doc-index">
    <div class="varlet-doc-index__layout">
      <div class="varlet-doc-index__logo-container">
        <div class="varlet-doc-index__logo-background-mask"></div>
        <animation-box class="varlet-doc-index__logo" />
      </div>

      <div class="varlet-doc-index__title">{{ title }}</div>
      <div class="varlet-doc-index__description">{{ indexPage.description[language] }}</div>
      <div class="varlet-doc-index__link-button-group">
        <var-site-button class="varlet-doc-index__link-button" text outline @click="goGithub">
          <var-site-icon name="github" size="24px" />
        </var-site-button>
        <var-site-button class="varlet-doc-index__link-button" text outline v-if="darkMode" @click="toggleTheme">
          <var-site-icon size="24px" :name="currentTheme === 'darkThemes' ? 'weather-night' : 'white-balance-sunny'" />
        </var-site-button>
        <var-site-button class="varlet-doc-index__link-button" text outline v-if="languages" @click="toggleLanguages">
          <var-site-icon name="translate" size="24px" />
        </var-site-button>
        <var-site-button class="varlet-doc-index__link-button" type="primary" style="line-height: 1.2" @click="getStar">
          <span class="varlet-doc-index__link-button-text">{{ indexPage.started[language] }}</span>
          <var-site-icon style="transform: rotate(-90deg)" name="arrow-down" size="24px" />
        </var-site-button>
      </div>

      <div class="varlet-doc-index__features" v-if="indexPage.features">
        <div class="varlet-doc-index__feature" v-for="feature in indexPage.features">
          <div class="varlet-doc-index__feature-name">{{ feature.name[language] }}</div>
          <div class="varlet-doc-index__feature-description">{{ feature.description[language] }}</div>
        </div>
      </div>

      <div class="varlet-doc-index__contributors" v-if="indexPage.contributors">
        <div class="varlet-doc-index__contributors-title">{{ indexPage.contributors.label[language] }}</div>

        <a class="varlet-doc-index__contributors-link" :href="indexPage.contributors.link">
          <img class="varlet-doc-index__contributors-image" :src="indexPage.contributors.image" />
        </a>
      </div>

      <div class="varlet-doc-index__footer">
        <div class="varlet-doc-index__license">{{ indexPage.license[language] }}</div>
        <div class="varlet-doc-index__copyright">{{ indexPage.copyright[language] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimationBox from '../../components/AnimationBox.vue'
import config from '@config'
import VarSiteButton from '../../../components/button'
import VarSiteIcon from '../../../components/icon'
import { get } from 'lodash-es'
import { getBrowserTheme, setTheme, getPCLocationInfo, watchThemes } from '../../../utils'

const themeKey = get(config, 'themesKey')

export default {
  data() {
    return {
      github: get(config, 'pc.header.github'),
      currentTheme: getBrowserTheme(themeKey),
      darkMode: get(config, 'pc.header.darkMode'),
      title: get(config, 'title'),
      language: get(config, 'defaultLanguage'),
      languages: get(config, 'pc.header.i18n'),
      indexPage: get(config, 'pc.indexPage'),
    }
  },
  created() {
    setTheme(config, this.currentTheme)
    window.postMessage(this.getThemesMessage, '*')
    watchThemes(this, (theme, from) => {
      from === 'mobile' && this.setCurrentTheme(theme)
    })
  },
  computed: {
    getThemesMessage() {
      return { action: 'themesChange', from: 'pc', data: this.currentTheme }
    },
  },
  methods: {
    goGithub() {
      window.open(this.github)
    },

    getStar() {
      const { language: lang } = getPCLocationInfo()
      this.$router.push(`/${lang}/home`)
    },

    setCurrentTheme(themes) {
      this.currentTheme = themes
      setTheme(config, this.currentTheme)
      window.localStorage.setItem(themeKey, this.currentTheme)
    },

    toggleTheme() {
      this.setCurrentTheme(this.currentTheme === 'darkThemes' ? 'themes' : 'darkThemes')
      window.postMessage(this.getThemesMessage, '*')
      document.getElementById('mobile')?.contentWindow.postMessage(this.getThemesMessage, '*')
    },
    setLocale() {
      const { language: lang } = getPCLocationInfo()
      if (!lang) return

      this.language = lang
      document.title = get(config, 'pc.title')[lang]
    },
    toggleLanguages() {
      const { language: lang } = getPCLocationInfo()

      const { menuName } = getPCLocationInfo()
      const replaceStr = `/${lang === 'zh-CN' ? 'en-US' : 'zh-CN'}/${menuName}`
      this.language = lang
      this.$router.replace(replaceStr)
    },
  },
  components: {
    VarSiteIcon,
    VarSiteButton,
    AnimationBox,
  },
  watch: {
    '$route.path': {
      handler() {
        this.setLocale()
      },
      immediate: true,
    },
  },
}
</script>
<style lang="less" scoped>
@import './index';
</style>
