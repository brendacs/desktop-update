<template>
  <div class="window-nav">
    <div class="window-button-container">
      <a class="window-button button-close"></a>
      <a class="window-button button-min"></a>
      <a class="window-button button-expand"></a>
    </div>
    <div class="window-title-container">
      <p>{{title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WindowNavigation',
  props: ['title']
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables-mac",
        "../../assets/scss/mixins";

.window-nav {
  border-radius: 5px 5px 0 0;
  position: relative;
  height: auto;
  background: linear-gradient(to bottom, $mac-titlebar-color-light, $mac-titlebar-color-dark);
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid $mac-titlebar-color-border;
}

.window-button-container {
  display: flex;
  flex-direction: row;
  padding: 5px;

  .window-button {
    color: $mac-label-font-color;
    border-width: 0;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    margin-left: 8px;
    cursor: pointer;
  }

  .button-close {
    background-color: $mac-close-button;
    border: 1px solid $mac-close-button-border;
    transition: all 0.2s ease;

    &:hover {
      background-color: darken($mac-close-button, 15%);
    }
  }

  .button-min {
    background-color: $mac-min-button;
    border: 1px solid $mac-min-button-border;
    transition: all 0.2s ease;

    &:hover {
      background-color: darken($mac-min-button, 15%);
    }
  }

  .button-expand {
    background-color: $mac-expand-button;
    border: 1px solid $mac-expand-button-border;
    transition: all 0.2s ease;

    &:hover {
      background-color: darken($mac-expand-button, 5%);
    }
  }
}

.window-title-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.window-title-container p {
  margin-left: -70px;
}

@media screen and (max-width: 1024px) {
  .window-nav {
    border-radius: 0;
  }
}
</style>