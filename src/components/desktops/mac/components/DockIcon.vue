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