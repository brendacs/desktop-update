<template>
  <div class="desktop">
    <div class="files">
      <DesktopFolder title="Education"/>
      <DesktopFolder title="Experience"/>
      <DesktopFolder title="Projects"/>
      <DesktopFolder title="Documents"/>
    </div>
    <div class="dock">
      <DesktopDock/>
    </div>
  </div>
</template>

<script>
import DesktopFolder from './components/DesktopFolder.vue'
import DesktopDock from './components/DesktopDock.vue'

export default {
  name: 'MacDesktop',
  components: {
    DesktopFolder,
    DesktopDock
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../../assets/scss/mixins";

.desktop {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
              url('./images/lakeside-wallpaper.jpg');
  background-size: cover;
}

.files {
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.dock {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
