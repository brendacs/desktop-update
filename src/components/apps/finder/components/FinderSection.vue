<template>
    <div class="finder-file-container content-container">
      <div class="finder-section finder-outer-directory-list-container">
        <FinderItem v-on:item-click="selectFinderItem" v-for="(folder, key) in finderData.folders" :key="key" :finderItem="folder" type="folder" :currentFolder="currentFolder"/>
      </div>
      <div class="finder-section finder-inner-items-list-container">
        <FinderItem v-on:item-click="selectFinderItem" v-for="(item, key) in finderData.items[currentFolder.toLowerCase()]" :key="key" :finderItem="item" type="item" :currentItem="currentItem"/>
      </div>
    </div>
</template>

<script>
import FinderItem from './FinderItem'
import finderData from '../data/finderData.json'

export default {
  name: 'FinderSection',
  components: {
    FinderItem
  },
  props: ['currentFolder'],
  data() {
    return {
      currentItem: null,
      finderData: finderData
    }
  },
  methods: {
    selectFinderItem(type, finderItem) {
      if (type === 'folder') {
        this.$emit('item-click', finderItem);
      } else if (type === 'item') {
        this.currentItem = finderItem.id;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../assets/scss/variables-mac";

.finder-file-container {
  height: 95.25%;
  width: 100%;
  color: $finder-text-font-color;
  display: flex;
  flex-direction: row;
}

.finder-section {
  height: 100%;
  width: 30%;
  border-right: 1px solid $mac-titlebar-color-border;
  padding: 2px 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.finder-section:last-child {
  width: 40%;
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