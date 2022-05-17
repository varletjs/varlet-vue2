<template>
  <div class="home-page">
    <div class="slash-box box-1"></div>
    <div class="slash-box box-2"></div>
    <div class="slash-box box-3"></div>
    <div class="slash-box box-4"></div>
    <div class="slash-box box-5"></div>
    <div class="profile-container">
      <div class="container-box">
        <div class="description-container">
          <animation-box class="logo" />
          <div class="base-title">{{ title }}</div>
        </div>
        <div class="base-description">{{ pack.description }}</div>

        <div class="button-group">
          <var-site-button class="common-button github-button" block @click="goGithub">
            <div class="block-button-content">
              <span>GITHUB</span>
              <var-site-icon style="margin-left: 10px;" name="github" size="24px" />
            </div>
          </var-site-button>
          <var-site-button class="common-button extra-button margin-left" text v-if="darkMode" @click="toggleTheme">
            <var-site-icon size="24px" :name="currentThemes === 'themes' ? 'white-balance-sunny' : 'weather-night'" />
          </var-site-button>
        </div>

        <div class="button-group">
          <var-site-button type="primary" class="common-button primary-button" block @click="getStar">
            <div class="block-button-content">
              <span>{{ pack.started }}</span>
              <var-site-icon style="margin-left: 10px; transform: rotate(-90deg)" name="arrow-down" size="24px" />
            </div>
          </var-site-button>
          <var-site-button class="common-button extra-button margin-left" text v-if="languages" @click="toggleLanguages">
            <var-site-icon name="translate" size="24px" />
          </var-site-button>
        </div>
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
import { getBrowserThemes, setThemes, getPCLocationInfo, watchThemes } from '../../../utils'
import en_US from './locale/en-US'
import zh_CN from './locale/zh-CN'

const themesKey = get(config, 'themesKey');
const packs = {
  'zh-CN': zh_CN,
  'en-US': en_US
};

export default ({
  data() {
    return {
      github:get(config, 'pc.header.github'),
      currentThemes: getBrowserThemes(themesKey),
      darkMode: get(config, 'pc.header.darkMode'),
      title: get(config, 'title'),
      languages: get(config, 'pc.header.i18n'),
      pack: {}
    }
  },
  created() {
    setThemes(config, this.currentThemes)
    window.postMessage(this.getThemesMessage, '*')
    watchThemes(this, (themes, from) => {
      from === 'mobile' && this.setCurrentThemes(themes)
    })
  },
  computed:{
    getThemesMessage() { 
      return { action: 'themesChange', from: 'pc', data: this.currentThemes }
    },
  },
  methods: {
    goGithub() {
      window.open(this.github)
    },

    getStar () {
      const { language: lang } = getPCLocationInfo()
      this.$router.push(`/${lang}/home`)
    },

    setCurrentThemes (themes) {
      this.currentThemes = themes
      setThemes(config, this.currentThemes)
      window.localStorage.setItem(themesKey, this.currentThemes)
    },
    
    toggleTheme() {
      this.setCurrentThemes(this.currentThemes === 'darkThemes' ? 'themes' : 'darkThemes')
      window.postMessage(this.getThemesMessage, '*')
        ; document.getElementById('mobile')?.contentWindow.postMessage(this.getThemesMessage, '*')
    },
    setLocale() {
      const { language: lang } = getPCLocationInfo()
      if (!lang) return

      this.pack = packs[lang]
      document.title = get(config, 'pc.title')[lang]
    },
    toggleLanguages() {
      const { language: lang } = getPCLocationInfo()

      const { menuName } = getPCLocationInfo()
      const replaceStr = `/${lang === 'zh-CN' ? 'en-US' : 'zh-CN'}/${menuName}`
      this.$router.replace(replaceStr)
    },
  },
  components:{
    VarSiteIcon,
    VarSiteButton,
    AnimationBox
  },
  watch:{
    '$route.path': {
      handler() {
        this.setLocale()
      },
      immediate: true
    }
  }
})

</script>
<style lang="less" scoped>
@import "./index";
</style>
