<script>
export default {
  name: 'FileNavigation'
}
</script>

<template>
  <div class="filebar">
    <div class="filebar-explorer">
      <p class="text">
        {{ 'Explorer'.toUpperCase() }}
      </p>
    </div>
    <div class="open">
      <div class="filebar-header"></div>
    </div>
    <div class="files">
      <div class="filebar-header"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../../assets/scss/variables-mac";

.filebar {
  display: flex;
  flex-direction: column;
  background-color: $vscode-dark;
  min-width: 200px;
  height: 100%;

  &-explorer {
    color: $vscode-gray-font;
    height: 40px;
    padding: 0 20px;
    display: flex;
    align-items: center;

    .text {
      font-size: 11px;
    }
  }

  .open {
    height: 30%;
  }

  .files {
    height: 70%;
  }

  &-header {
    background-color: $vscode-light;
    width: 100%;
    height: 25px;
  }
}
</style>