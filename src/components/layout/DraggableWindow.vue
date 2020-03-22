<template>
  <div :class="`window ${name.toLowerCase()}-window ${!show && 'hide'}`">
    <WindowNavigation :title="title"/>
    <slot></slot>
  </div>
</template>

<script>
import WindowNavigation from './WindowNavigation'

export default {
  name: 'DraggableWindow',
  props: ['name', 'show', 'title'],
  components: {
    WindowNavigation
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables-mac",
        "../../assets/scss/mixins";

.window {
  position: absolute;
  top: 0vh;
  left: 5vw;
  height: 85vh;
  width: 70vw;
  background-color: $window-background;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  -moz-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
}

.window.fullscreen {
  top: 0vh;
  left: 0vw;
  height: 100vh;
  width: 100vw;
}

.finder-window, .terminal-window {
  top: 10vh;
  left: 20vw;
  height: 70vh;
  width: 60vw;
}

.sublime-window, .terminal-window {
  background-color: black;
}

.sublime-window {
  top: 5vh;
  left: 10vw;
}

.terminal-window {
  top: 15vh;
  left: 25vw;
}

@media screen and (max-width: 1024px) {
  .window, .finder-window {
    top: 0vh;
    left: 0vw;
    height: 100vh;
    width: 100vw;
    border-radius: 0;
  }
}
</style>