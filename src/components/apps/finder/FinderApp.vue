<template>
  <div>
    <FinderSection v-on:item-click="(folder) => this.$emit('item-click', folder)" :currentFolder="currentFolder"/>
  </div>
</template>

<script>
import FinderSection from './components/FinderSection'

export default {
  name: 'FinderApp',
  components: {
    FinderSection
  },
  props: ['currentFolder']
}
</script>

<style lang="scss" scoped>
div {
  height: 100%;
  width: 100%;
}
</style>