<template>
  <div class="var-elevation-example">
    <div class="list__item" v-for="e in elevations" :class="`var-elevation--${e}`" :style="{ background }" :key="e">
      {{ e }}
    </div>
  </div>
</template>

<script>
import dark from '../../themes/dark'
import { watchDarkMode } from '@varlet-vue2/cli/site/utils'

export default {
  name: 'ElevationExample',

  data: () => ({
    elevations: Array.from({ length: 25 }, (_, i) => i),
    background: dark,
  }),

  created() {
    watchDarkMode(this, dark, (themes) => {
      this.background = themes === 'darkThemes' ? '#303030' : '#fff'
    })
  },
}
</script>

<style lang="less">
@import '../../styles/elevation';
</style>

<style scoped lang="less">
.var-elevation-example {
  display: flex;
  flex-wrap: wrap;
  padding: 2vw;
  .list__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25vw;
    height: 25vw;
    color: var(--site-config-color-sub-text);
    margin: 2vw;
    transition: 0.25s background-color;
  }
}
</style>
