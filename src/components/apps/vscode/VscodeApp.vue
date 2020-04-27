<script>
import FileNavigation from './components/FileNavigation'
import TextEditor from './components/TextEditor'
import vscodeData from './data/vscodeData.json'

export default {
  name: 'VscodeApp',
  components: {
    FileNavigation,
    TextEditor
  },
  data() {
    return {
      files: [],
      folders: [],
      vscodeData
    }
  },
  beforeMount() {
    this.parseVscodeData();
  },
  methods: {
    parseVscodeData() {
      for (let item in vscodeData) {
        if (item.includes('.')) {
          this.files.push(item);
        } else {
          this.folders.push(item);
        }
      }
    }
  }
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
    <FileNavigation
      :files="files"
      :folders="folders"
      :vscode-data="vscodeData"
    />
    <TextEditor :files="files" />
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
</style>