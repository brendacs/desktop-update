<script>
import VueDraggable from 'vue-draggable-resizable'
import WindowNavigation from './WindowNavigation'

export default {
  name: 'DraggableWindow',
  components: {
    VueDraggable,
    WindowNavigation
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <VueDraggable
    drag-handle=".window-nav"
    :resizable="false"
  >
    <div :class="`window ${name.toLowerCase()}-window ${!show && 'hide'}`">
      <WindowNavigation
        :title="title"
        @close-window="$emit('close-window')"
      />
      <slot />
    </div>
  </VueDraggable>
</template>

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

.finder-window, .terminal-window, .user-window {
  top: 15vh;
  left: 20vw;
  height: 400px;
  width: 700px;
}

.terminal-window {
  top: 20vh;
  left: 25vw;
}

.user-window {
  left: 30vw;
}

.vscode-window {
  top: 5vh;
  left: 18vw;
  height: 600px;
  width: 900px;
  background-color: $vscode-light;
}

.terminal-window {
  background-color: black;
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

.draggable.vdr {
  height: 0 !important;
  width: 0 !important;
}
</style>