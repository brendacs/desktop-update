<template>
  <div class="dock">
    <DockIcon name="Finder"/>
    <DockIcon name="Sublime"/>
    <DockIcon name="Terminal"/>
  </div>
</template>

<script>
import DockIcon from './DockIcon.vue'

export default {
  name: 'DesktopDock',
  components: {
    DockIcon
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../assets/scss/variables-mac";
@import "../../../../assets/scss/mixins";

.dock {
  height: 60px;
  width: 92vw;
  background-color: $mac-highlight-color;
  display: flex;
  flex-direction: row;
  margin-left: 4vw;
  border-radius: 5px 5px 0 0;
  z-index: 999;
}
</style>