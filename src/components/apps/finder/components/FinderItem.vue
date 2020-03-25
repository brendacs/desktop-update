<template>
  <div class="finder-outer-directory-list">
    <div @click="$emit('item-click', type, finderItem)" class="finder-item-container" :class="{selected: this.currentFolder === this.finderItem.name || this.currentItem === this.finderItem.id}">
      <div><img :class="`finder-${type}-icon image-${isPseudoImage()}`" :src="require(`../images/${finderItem.image}`)"/></div>
      <div><p>{{finderItem.name}}</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FinderItem',
  props: ['currentFolder', 'currentItem', 'finderItem', 'type'],
  methods: {
    isPseudoImage() {
      return this.type === 'item' && this.finderItem.name.split('.')[1].includes('jpg' || 'png');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../assets/scss/variables-mac";

/* finder items */
.finder-item-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2.5px 5px;

  &:hover {
    background-color: $mac-highlight-color-dark;
  }

  p {
    margin-top: -2px;
  }
}

.finder-folder-icon {
  width: 20px;
  margin-right: 5px;
}

.finder-item-icon {
  width: 16px;
  margin-right: 5px;
}

.finder-item-icon.image-true {
  border: 1px solid white;
  box-shadow: 0px 0.5px 1px 0.5px rgba(0,0,0,0.25);
}

.selected {
  background-color: $mac-highlight-color-dark;
}
</style>