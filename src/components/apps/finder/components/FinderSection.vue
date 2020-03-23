<template>
    <div class="finder-file-container content-container">
      <div v-for="(section, index) in sections" :key="index" class="finder-section finder-outer-directory-list-container finder-section-border">
        <FinderItem/>
      </div>
    </div>
</template>

<script>
import FinderItem from './FinderItem'
import items from '../data/items.json'

export default {
  name: 'FinderSection',
  components: {
    FinderItem
  },
  data() {
    return {
      items: items,
      sections: ['outer', 'inner', 'description']
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
  padding: 2px 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.finder-section:last-child {
  width: 40%;
  border-right: none;
}

.finder-section-border {
  border-right: 1px solid $mac-titlebar-color-border;
}
</style>