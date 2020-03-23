<template>
  <div class="desktop">
    <div class="folders">
      <DesktopFolder v-for="(folder, index) in folders" :key="index" v-on:folder-click="openApp" :title="folder"/>
    </div>
    <DraggableWindow v-for="app in apps" :key="app.id" v-on:close-window="currentApp = null" :name="app.name" :title="app.title || currentFolder" :show="currentApp === app.id">
      <FinderApp/>
    </DraggableWindow>
    <div class="dock">
      <DesktopDock v-on:icon-click="openApp" :apps="apps"/>
    </div>
  </div>
</template>

<script>
import DesktopFolder from './components/DesktopFolder.vue'
import DesktopDock from './components/DesktopDock.vue'
import DraggableWindow from '../../layout/DraggableWindow.vue'
import FinderApp from '../../apps/finder/FinderApp'

export default {
  name: 'MacDesktop',
  components: {
    DesktopFolder,
    DesktopDock,
    DraggableWindow,
    FinderApp
  },
  data() {
    return {
      apps: [
        {id: 'finder', name: 'Finder'},
        {id: 'sublime', name: 'Sublime', title: 'Sublime'},
        {id: 'terminal', name: 'Terminal', title: 'brendacs@Brendas-MBP-2020'}
      ],
      currentApp: null,
      currentFolder: 'Education',
      folders: ['Education', 'Experience', 'Projects', 'Documents']
    }
  },
  methods: {
    openApp(app, folder='Education') {
      this.currentApp = app;
      this.currentFolder = folder;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../../assets/scss/mixins";

.desktop {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
              url('./images/lakeside-wallpaper.jpg');
  background-size: cover;
}

.folders {
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.dock {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
