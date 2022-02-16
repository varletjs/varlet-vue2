<template>
  <div class="site-mobile">
    <div class="router-view__block">
      <router-view />
    </div>
  </div>
</template>

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
  background: #fff;
  color: #555;
  transition: background-color 0.25s, color 0.25s;
}

::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}

.router-view__block {
  padding: 54px 12px 15px;
}

* {
  box-sizing: border-box;
}
</style>
