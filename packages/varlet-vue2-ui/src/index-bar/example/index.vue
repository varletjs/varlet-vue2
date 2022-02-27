<template>
  <var-index-bar @change="change" duration="300" :sticky-offset-top="54">
    <div v-for="item in list" :key="item">
      <var-index-anchor
        :index="item"
        :class.native="'var-index-anchor__example'"
        :style.native="{ background: bgColor, color }"
      >
        {{ pack.title }} {{ item }}
      </var-index-anchor>
      <var-cell>{{ item }} {{ pack.text }}</var-cell>
      <var-cell>{{ item }} {{ pack.text }}</var-cell>
    </div>
  </var-index-bar>
</template>

<script>
import VarIndexAnchor from '../../index-anchor/IndexAnchor.vue'
import VarIndexBar from '..'
import VarCell from '../../cell'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'

export default {
  name: 'IndexBarExample',

  components: {
    VarIndexBar,
    VarIndexAnchor,
    VarCell,
  },

  data: () => ({
    list: [],
    bgColor: '#e7edf7',
    color: '#2e67ba',
  }),

  computed: {
    pack() {
      return pack.value
    },
  },

  created() {
    watchLang(this, use)
    watchDarkMode(this, dark, (themes) => {
      this.bgColor = themes === 'darkThemes' ? 'rgb(41, 42, 45)' : '#e7edf7'
      this.color = themes === 'darkThemes' ? '#3980e8' : '#2e67ba'
    })
  },

  mounted() {
    for (let i = 0; i < 26; i++) {
      this.list.push(String.fromCharCode(65 + i))
    }
  },

  methods: {
    change(value) {
      console.log(value)
    },
  },
}
</script>

<style lang="less">
.var-index-anchor__example {
  height: 42px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  transition: all 0.25s;
}
</style>
