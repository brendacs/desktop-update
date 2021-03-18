<script>
import DockIcon from './DockIcon.vue'

export default {
  name: 'DesktopDock',
  components: {
    DockIcon
  },
  props: {
    apps: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<template>
  <div class="dock">
    <DockIcon
      v-for="app in apps"
      :key="app.id"
      :name="app.name"
      @icon-click="$emit('icon-click', app.id)"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '../../../../assets/scss/variables-mac',
  '../../../../assets/scss/mixins';

.dock {
  height: 60px;
  width: 92vw;
  background-color: $mac-highlight-color;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 4vw;
  border-radius: 5px 5px 0 0;
  z-index: 999;
}
</style>
