<script>
export default {
  name: 'FinderItem',
  props: {
    currentFolder: {
      type: String,
      default: ''
    },
    currentItem: {
      type: String,
      default: ''
    },
    finderItem: {
      type: Object,
      default: () => {}
    },
    type: {
      type: String,
      default: ''
    }
  },
  methods: {
    isPseudoImage() {
      return this.type === 'item' && this.finderItem.name.split('.')[1].includes('jpg' || 'png');
    }
  }
}
</script>

<template>
  <div
    class="finder-item-container"
    :class="{selected: currentFolder === finderItem.name || currentItem === finderItem.id}"
    @click="$emit('item-click', type, finderItem)"
  >
    <div>
      <img
        :class="`finder-${type}-icon image-${isPseudoImage()}`"
        :src="require(`../images/${finderItem.image}`)"
      >
    </div>
    <div><p>{{ finderItem.name }}</p></div>
  </div>
</template>

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