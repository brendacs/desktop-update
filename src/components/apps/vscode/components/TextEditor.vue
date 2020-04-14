<script>
export default {
  name: 'TextEditor'
}
</script>

<template>
  <div class="editor">
    <div class="tabs"></div>
    <div class="breadcrumb-bar"></div>
    <div class="text"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../../assets/scss/variables-mac";

.editor {
  height: 100%;
  width: 100%;

  .tabs {
    color: $vscode-gray-font;
    height: 36.5px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    width: 100%;
    background-color: $vscode-highlight;
  }

  .breadcrumb-bar {
    height: 25px;
    box-shadow: 0 8px 5px -2px $vscode-dark;
  }
}
</style>