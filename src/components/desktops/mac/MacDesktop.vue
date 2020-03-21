<template>
  <div class="desktop">

  </div>
</template>

<script>
export default {
  name: 'MacDesktop'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../../assets/scss/mixins";

.desktop {
  width: 100vw;
  height: 100vh;
  background: url('../../../assets/images/lakeside_wallpaper.jpg');
  background-size: cover;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
