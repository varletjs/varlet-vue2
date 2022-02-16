<template>
  <div class="app-type">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppType',
}
</script>

<style lang="less">
.app-type {
  width: 100%;
  padding: 15px 0;
  color: #888;
  font-size: 14px;
}
</style>
