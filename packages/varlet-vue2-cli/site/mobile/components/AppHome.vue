<template>
  <div class="app-home">
    <div class="logo">
      <h1 class="varlet-home__title">
        <img class="varlet-home__image" :src="logo" />
        <span>{{ title }}</span>
      </h1>
      <h2 class="varlet-home__desc">{{ description[lang] }}</h2>
    </div>
    <var-site-cell
      v-for="component in components"
      :key="component.doc"
      @click.native="toComponent(component)"
      v-ripple
    >
      <template #extra>
        <var-site-icon name="chevron-right" size="14" />
      </template>
      <template #default>
        {{ component.text[lang] }}
      </template>
    </var-site-cell>
  </div>
</template>

<script>
import config from '@config'
import { inIframe, isPhone, watchLang, watchPlatform } from '../../utils'

export default {
  name: 'AppHome',

  data: () => ({
    title: config?.title ?? '',
    logo: config?.logo ?? '',
    description: config?.mobile?.title ?? {},
    menu: config?.pc?.menu ?? [],
    components: (config?.pc?.menu ?? []).filter((item) => item.type === 2),
    lang: 'zh-CN',
    platform: 'mobile',
  }),

  created() {
    watchLang(this, (newValue) => {
      this.lang = newValue
    })

    watchPlatform(this, (newValue) => {
      this.platform = newValue
    })
  },

  methods: {
    toComponent(component) {
      console.log(component)
      this.$router.push({
        path: `/${component.doc}`,
        query: {
          language: this.lang,
          platform: this.platform,
          replace: component.doc
        },
      })

      if (!isPhone() && inIframe()) {
        window.top?.scrollToMenu(component.doc)
      }
    }
  }
}
</script>

<style scoped lang="less">
.logo {
  height: 100px;
  padding-top: 30px;
  margin-bottom: 20px;
}

.varlet-home__title {
  margin: 0 0 16px;
  font-size: 32px;
}

.varlet-home__title,
.varlet-home__desc {
  padding: 0 12px;
  font-weight: normal;
  line-height: 1;
  user-select: none;
}

.varlet-home__desc {
  margin: 0 0 40px;
  color: var(--site-config-color-sub-text);
  font-size: 14px;
}

.varlet-home__image {
  width: 32px;
  height: 32px;
}

.varlet-home__image,
.varlet-home__title span {
  display: inline-block;
  vertical-align: middle;
}

.varlet-home__title span {
  margin-left: 16px;
}

.var-site-cell {
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: all 0.3s;
  color: var(--site-config-color-text);

  &:hover {
    color: var(--site-config-color-mobile-cell-hover);
  }
}
</style>
