<script>
export default {
  name: 'FolderItem',
  props: {
    files: {
      type: Object,
      default: () => {}
    },
    itemName: {
      type: String,
      default: ''
    },
    itemType: {
      type: String,
      default: 'file'
    }
  }
}
</script>

<template>
  <div :class="itemType">
    <img class="icon" :src="require('../images/icon-folder.svg')" />
    <p>{{ itemName }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/shared.scss';
</style>
