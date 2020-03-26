<script>
import FinderSection from './components/FinderSection'

export default {
  name: 'FinderApp',
  components: {
    FinderSection
  },
  props: {
    currentFolder: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <div>
    <FinderSection
      :current-folder="currentFolder"
      @item-click="(folder) => this.$emit('item-click', folder)"
    />
  </div>
</template>

<style lang="scss" scoped>
div {
  height: 100%;
  width: 100%;
}
</style>