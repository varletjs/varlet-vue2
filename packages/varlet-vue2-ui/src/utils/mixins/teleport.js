export const createTeleportMixin = {
  data: () => ({
    teleportDisabled: false,
  }),

  activated() {
    this.teleportDisabled = false
  },

  deactivated() {
    this.teleportDisabled = true
  },
}
