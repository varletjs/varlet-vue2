
<template>
  <div ref="varletLogoAnimationRef" id="varletLogoAnimationRef" v-bind="$attrs"></div>
</template>

<script>
import { defineComponent } from '../../components/utils/create'
import floating from '../floating'

export default defineComponent({
  name: 'AnimationBox',
  data:() => ({
      mutationObserver: null,
  }),
  created() {
    floating.animationBoxData = this.$attrs;
    this.mutationObserver = new MutationObserver(() => {
      floating.animationElClientRect = this.$refs.varletLogoAnimationRef?.getBoundingClientRect();
    });
    this.mutationObserver.observe(document.body, { attributes: true, subtree: true, childList: true });
  },
  mounted() {
    floating.animationEl = this.$refs.varletLogoAnimationRef
    floating.animationElClientRect = this.$refs.varletLogoAnimationRef.getBoundingClientRect();
  },
  beforeUnmount() {
    this.mutationObserver && this.mutationObserver.disconnect();
  },
})
</script>
