<script>
import FinderItem from './components/FinderItem'
import ItemDescription from './components/ItemDescription'
import finderData from './data/finderData.json'

export default {
  name: 'FinderApp',
  components: {
    FinderItem,
    ItemDescription
  },
  props: {
    currentFolder: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentItem: {},
      expanded: false,
      finderData: finderData
    }
  },
  methods: {
    selectFinderItem(type, finderItem) {
      if (type === 'folder') {
        this.currentItem = {};
        this.expanded = false;
        this.$emit('item-click', finderItem);
      } else if (type === 'item') {
        this.currentItem = finderItem;
        this.expanded = false;
      }
    }
  }
}
</script>

<template>
  <div class="finder-file-container">
    <div class="finder-section">
      <FinderItem
        v-for="(folder, key) in finderData.folders"
        :key="key"
        :current-folder="currentFolder"
        :finder-item="folder"
        type="folder"
        @item-click="selectFinderItem"
      />
    </div>
    <div class="finder-section">
      <FinderItem
        v-for="(item, key) in finderData.items[currentFolder.toLowerCase()]"
        :key="key"
        :current-item="currentItem"
        :finder-item="item"
        type="item"
        @item-click="selectFinderItem"
      />
    </div>
    <div class="finder-section">
      <ItemDescription
        :expanded="expanded"
        :item="currentItem"
        @show-click="expanded = !expanded"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/scss/variables-mac";

.finder-file-container {
  height: 95.25%;
  width: 100%;
  color: $finder-text-font-color;
  display: flex;
  flex-direction: row;
}

.finder-section {
  height: 100%;
  width: 33%;
  border-right: 1px solid $mac-titlebar-color-border;
  padding: 2px 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.finder-section:last-child {
  width: 34%;
  border-right: none;
}

@media screen and (max-width: 650px) {
  .finder-section {
    width: 50%;
  }

  .finder-section:last-child {
    display: none;
  }

  .finder-selected-item {
    display: none;
  }
}
</style>