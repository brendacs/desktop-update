<template>
  <div class="desktop-icon-container">
    <img class="desktop-icon" src="../images/directory.png" /><p>{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'DesktopFolder',
  props: ['title']
}
</script>

<style lang="scss" scoped>
@import "../../../../assets/scss/mixins";

.desktop-icon-container {
  @include short-transition;
  width: 95px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px 0;
  margin-bottom: 10px;
  border-radius: 5px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.55);
  }

  p {
    color: #fff;
    margin-top: 5px;
  }
}

.desktop-icon {
  width: 60px;
}
</style>