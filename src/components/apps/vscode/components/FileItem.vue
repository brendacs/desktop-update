<script>
export default {
  name: 'FileItem',
  props: {
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
    <img
      class="icon"
      :src="require(`../images/icon-${itemName.split('.')[1]}.svg`)"
    />
    <p>{{ itemName }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/shared.scss';

.tab {
  min-width: 150px;
  height: 100%;
  background-color: $vscode-highlight;
  border-right: 1px solid $vscode-dark;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  p {
    cursor: pointer;
    font-size: 13px;
  }
}
</style>
