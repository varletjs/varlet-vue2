<template>
  <div class="example">
    <var-teleport to="body" :disabled="disabled">
      <var-button @click="disabled = !disabled">{{ disabled ? 'in' : 'out' }}</var-button>
    </var-teleport>
  </div>
</template>

<script>
import VarTeleport from '..'
import VarButton from '../../button'

export default {
  components: {
    VarTeleport,
    VarButton,
  },
  data: () => ({
    disabled: false,
  }),
}
</script>
