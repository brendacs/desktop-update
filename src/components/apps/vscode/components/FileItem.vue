<script>
export default {
  name: 'FileItem',
  props: {
    folder: {
      type: Boolean,
      default: false
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
    <img class="icon" :src="require(`../images/icon-${itemName.split('.')[1]}.svg`)">
    <p>{{ itemName }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../../assets/scss/variables-mac";

.file {
  background-color: none;
  width: 100%;
  height: 25px;
  color: $vscode-gray-font;
  padding: 0 10px;
  display: flex;
  align-items: center;
  cursor: pointer;

  p {
    cursor: pointer;
    font-size: 13px;
  }

  &:hover {
    background-color: $vscode-highlight;
  }
}

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

.icon {
  width: 15px;
  margin-right: 5px;
}
</style>