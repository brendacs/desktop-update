<script>
import FileItem from './FileItem'
import FolderItem from './FolderItem'

export default {
  name: 'FileNavigation',
  components: {
    FileItem,
    FolderItem
  },
  props: {
    files: {
      type: Array,
      default: () => []
    },
    folders: {
      type: Array,
      default: () => []
    },
    vscodeData: {
      type: Object,
      default: () => {}
    }
  }
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
      <div class="filebar-header" />
      <FileItem
        v-for="(file, key) in files"
        :key="key"
        :item-name="file"
        item-type="file"
      />
    </div>
    <div class="files">
      <div class="filebar-header" />
      <FolderItem
        v-for="(folder, key) in folders"
        :key="key"
        :files="vscodeData[folder]"
        :item-name="folder"
        item-type="file"
      />
      <FileItem
        v-for="(file, key) in files"
        :key="key"
        :item-name="file"
        item-type="file"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../../assets/scss/variables-mac';

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
    overflow: scroll;
  }

  &-header {
    background-color: $vscode-light;
    width: 100%;
    height: 25px;
  }
}
</style>
