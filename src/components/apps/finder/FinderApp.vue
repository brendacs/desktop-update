<template>
  <div>
    <FinderSection/>
  </div>
</template>

<script>
import FinderSection from './components/FinderSection'

export default {
  name: 'FinderApp',
  components: {
    FinderSection
  }
}
</script>

<style lang="scss" scoped>
div {
  height: 100%;
  width: 100%;
}
</style>