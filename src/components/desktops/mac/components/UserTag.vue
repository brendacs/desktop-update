<script>
export default {
  name: 'UserTag'
}
</script>

<template>
  <div class="tag" @click="$emit('tag-click', 'user')">
    <img src="../images/lakeside-wallpaper.jpg">
  </div>
</template>

<style lang="scss" scoped>
@import "../../../../assets/scss/variables-mac",
        "../../../../assets/scss/mixins";

.tag {
  @include short-transition;
  position: absolute;
  top: 0;
  left: 20px;
  width: 35px;
  height: 35px;
  object-fit: contain;
  background-color: $mac-gray;
  padding: 5px;
  display: flex;
  align-items: flex-end;

  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;

  }
  
  &:hover {
    height: 40px;
  }
}
</style>
