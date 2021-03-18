<script>
export default {
  name: 'FinderItem',
  props: {
    currentFolder: {
      type: String,
      default: ''
    },
    currentItem: {
      type: Object,
      default: () => {}
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
  data() {
    return {
      exts: ['jpg', 'png']
    }
  },
  methods: {
    hasValidExtension: (item, exts = []) => {
      for (let ext of exts) {
        if (item.name && item.name.split('.')[1].includes(ext)) {
          return true
        }
      }
      return false
    }
  }
}
</script>

<template>
  <div
    class="finder-item-container"
    :class="{
      selected:
        currentFolder === finderItem.name ||
        (currentItem && currentItem.id === finderItem.id)
    }"
    @click="$emit('item-click', type, finderItem)"
  >
    <div>
      <img
        :class="
          `finder-${type}-icon image-${type === 'item' &&
            hasValidExtension(finderItem, exts)}`
        "
        :src="require(`../images/${finderItem.image}`)"
      />
    </div>
    <div class="name">
      <p>{{ finderItem.name }}</p>
      <span :class="{ hide: type === 'item' }">▲</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../../assets/scss/variables-mac';

/* finder items */
.finder-item-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 5px;
  height: 23px;

  &:hover {
    background-color: $mac-highlight-color-dark;
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
  box-shadow: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.25);
}

.name {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    transform: rotate(90deg);
    font-size: 8px;
    color: darken($mac-gray, 25%);
  }
}

.selected {
  background-color: $mac-highlight-color-dark;
}
</style>
