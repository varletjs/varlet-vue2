<template>
  <div class="var-image-example">
    <app-type>{{ pack.basicUsage }}</app-type>
    <var-image src="https://varlet-vue2.vercel.app/cat.jpg" />

    <app-type>{{ pack.fitMode }}</app-type>
    <var-row>
      <div class="fit-item">
        <var-image width="85px" height="85px" src="https://varlet-vue2.vercel.app/cat.jpg" />
        <div>fill</div>
      </div>

      <div class="fit-item">
        <var-image width="85px" height="85px" fit="cover" src="https://varlet-vue2.vercel.app/cat.jpg" />
        <div>cover</div>
      </div>

      <div class="fit-item">
        <var-image width="85px" height="85px" fit="contain" src="https://varlet-vue2.vercel.app/cat.jpg" />
        <div>contain</div>
      </div>

      <div class="fit-item">
        <var-image width="85px" height="85px" fit="none" src="https://varlet-vue2.vercel.app/cat.jpg" />
        <div>none</div>
      </div>

      <div class="fit-item">
        <var-image width="85px" height="85px" fit="scale-down" src="https://varlet-vue2.vercel.app/cat.jpg" />
        <div>scale-down</div>
      </div>
    </var-row>

    <app-type>{{ pack.setRadius }}</app-type>
    <var-row>
      <var-image
        width="85px"
        height="85px"
        fit="cover"
        :radius="10"
        src="https://varlet-vue2.vercel.app/cat.jpg"
        style="margin-right: 10px"
      />

      <var-image width="85px" height="85px" fit="cover" radius="50%" src="https://varlet-vue2.vercel.app/cat.jpg" />
    </var-row>

    <app-type>{{ pack.useRipple }}</app-type>
    <var-image ripple src="https://varlet-vue2.vercel.app/cat.jpg" />

    <app-type>{{ pack.useLazyLoad }}</app-type>
    <var-image lazy src="https://varlet-vue2.vercel.app/cat.jpg" />
  </div>
</template>

<script>
import VarImage from '..'
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
// TODO
import VarRow from '../../row'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'
import dark from '../../themes/dark'
import { use, pack } from './locale'

export default {
  name: 'ImageExample',

  components: {
    VarImage,
    VarRow,
    AppType,
  },

  computed: {
    pack() {
      return pack.value
    },
  },

  created() {
    watchLang(this, use)
    watchDarkMode(this, dark)
  },
}
</script>

<style scoped lang="less">
.var-image-example {
  .fit-item {
    color: #888;
    text-align: center;
    margin-right: 11px;
    margin-bottom: 11px;

    div {
      margin-bottom: 5px;
    }
  }
}
</style>
