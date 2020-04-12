<script>
export default {
  name: 'Vscode'
}
</script>

<template>
  <div class="vscode-window">
    <div class="sidebar">
      <button><img src="./images/vscode-files.png"></button>
      <button><img src="./images/vscode-search.png"></button>
      <button><img src="./images/vscode-git.png"></button>
      <button><img src="./images/vscode-debug.png"></button>
      <button><img src="./images/vscode-ext.png"></button>
    </div>
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
    <div class="editor">
      <div class="tabs"></div>
      <div class="breadcrumb-bar"></div>
      <div class="text"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/scss/variables-mac";

.vscode-window {
  width: 100%;
  height: 100%;
  background-color: $vscode-light;
  display: flex;
}

.sidebar {
  display: flex;
  flex-direction: column;

  button {
    background-color: transparent;
    border: none;
    width: 45px;
    height: 45px;
    padding: 0;
    margin: 5px 0;

    img {
      width: 100%;
    }
  }
}

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