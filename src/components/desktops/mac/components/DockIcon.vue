<template>
  <div class="dock-icon-container">
    <p class="dock-icon-label">{{name}}</p>
    <div class="label-triangle"></div>
    <a class="dock-icon-link"><img class="dock-icon" :src="getIcon()"/></a>
  </div>
</template>

<script>
import finder from '../images/finder.png';
import sublime from '../images/sublime.png';
import terminal from '../images/terminal.png';

export default {
  name: 'DockIcon',
  props: ['name'],
  data() {
    return {
      getIcon: () => {
        switch (this.name) {
          case 'Finder':
            return finder;
          case 'Sublime':
            return sublime;
          case 'Terminal':
            return terminal;
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../assets/scss/variables-mac";
@import "../../../../assets/scss/mixins";


.dock-icon-container {
  height: 50px;
  width: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 42px;

  &:active {
    filter: brightness(50%);
  }
}

.dock-icon-label {
  margin-top: -34px;
  visibility: hidden;
  width: 110px;
  background-color: $mac-label-color;
  border-radius: 5px;
  margin-bottom: 17px;
  padding: 2px 5px;
  color: $mac-label-font-color;
}

.label-triangle {
  margin-top: -24px;
  margin-bottom: 14px;
  border: 5px solid $mac-label-color;
  transform: rotate(45deg);
  visibility: hidden;
}

.finder-icon {
  margin-top: 2px;
}

.sublime-icon, .terminal-icon {
  width: 43px;
  filter: brightness(90%);
}

.terminal-icon {
  margin-top: 1px;
  width: 44px;
}
</style>