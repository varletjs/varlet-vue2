export function createTeleportMixin() {
  return {
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
}
