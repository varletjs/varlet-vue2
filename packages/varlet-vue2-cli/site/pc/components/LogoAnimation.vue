<template>
  <div>
    <teleport :to="animationEl" v-if="animationEl">
      <img v-show="!floatingState && logo" v-bind="animationBoxData" :style="styles" :src="logo" alt="logo" class="varlet-cli-logo-animation" />
    </teleport>
    <div v-show="floatingState">
      <img @transitionend="land" v-bind="animationBoxData" :style="styles" :src="logo" alt="logo"
        v-if="logo && animationEl"
        class="varlet-cli-logo-animation varlet-cli-logo-position varlet-cli-logo-transition" />
    </div>
  </div>
</template>

<script>
import config from '@config'
import { get } from 'lodash-es'
import teleport from "../../components/teleport";
import floating from '../floating'
import { defineComponent } from '../../components/utils/create'

export default defineComponent({
  name: 'LogoAnimation',
  data() {
    return {
      logo: get(config, 'logo'),
      floatingState:false,
      resetTimer: null
    }
  },
  computed:{
    styles(){
      if (!this.proxyRect) return {}
      return ({
        width: `${this.proxyRect.width || 0}px`,
        height: `${this.proxyRect.height || 0}px`,
        top: `${this.proxyRect.top}px`,
        left: `${this.proxyRect.left}px`,
      })
    },
    animationEl(){
      return floating.animationEl
    },
    animationBoxData(){
      return floating.animationBoxData;
    },
    proxyRect:{
      get(){
        return floating.animationElClientRect;
      },
      set(){ }
    }
  },
  mounted() {
    if (this.floatingState) {
      this.floatingState = false;
    }
    window.addEventListener('resize', this.resetPosition, false);
  },
  beforeUnmount() {
    this.resetTimer && clearTimeout(this.resetTimer)
    window.removeEventListener('resize', this.resetPosition);
  },
  created(){
    this.$router.beforeEach((to, from, next) => {
      if (!this.floatingState) {
        this.floatingState = true;
      }
      this.$nextTick(next);
    })
  },
  methods: {
    land() {
      this.floatingState = false;
    },
    async resetPosition () {
      if (this.floatingState) {
        this.floatingState = false
        await this.$nextTick();
      }
      this.resetTimer && window.clearTimeout(this.resetTimer);
      const newBRect = this.animationEl?.getBoundingClientRect()
      if (newBRect) {
        this.resetTimer = window.setTimeout(() => {
          this.proxyRect = newBRect
        }, 200)
      }
    }
  },
  components:{teleport}
})
</script>


<style lang="less">
.varlet-cli-logo-transition {
  transition: 0.5s all ease-in-out;
  width: 100%;
  height: 100%;
  display: block;
}

.varlet-cli-logo-animation {
  z-index: 10;
  pointer-events: none;
}

.varlet-cli-logo-position {
  position: fixed;
}
</style>
