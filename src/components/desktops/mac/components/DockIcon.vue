<script>
export default {
  name: 'DockIcon',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <div class="dock-icon-container">
    <p class="dock-icon-label">
      {{ name }}
    </p>
    <div class="label-triangle" />
    <a
      class="dock-icon-link"
      @click="$emit('icon-click')"
    >
      <img
        class="dock-icon"
        :src="require(`../images/${name.toLowerCase()}.png`)"
      >
    </a>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../../assets/scss/variables-mac",
        "../../../../assets/scss/mixins";

.dock-icon-container {
  height: 50px;
  width: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover .dock-icon-label {
    visibility: visible;
  }

  &:hover .label-triangle {
    visibility: visible;
  }

  &:hover .dock-icon {
    transform: scale(1.25);
  }
}

.dock-icon {
  @include short-transition;
  height: 40px;
  width: auto;

  &:active {
    filter: brightness(50%);
  }
}

.dock-icon-label {
  margin-top: -46px;
  visibility: hidden;
  width: 70px;
  background-color: $mac-label-color;
  border-radius: 5px;
  margin-bottom: 30px;
  padding: 2px 5px;
  color: $mac-label-font-color;
}

.label-triangle {
  margin-top: -36px;
  margin-bottom: 24px;
  border: 5px solid $mac-label-color;
  transform: rotate(45deg);
  visibility: hidden;
}
</style>