<script>
import DesktopDock from './components/DesktopDock.vue'
import DesktopFolder from './components/DesktopFolder.vue'
import DraggableWindow from '../../layout/DraggableWindow.vue'
import FinderApp from '../../apps/finder/FinderApp'

export default {
  name: 'MacDesktop',
  components: {
    DesktopDock,
    DesktopFolder,
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
    openApp(app, folder) {
      this.currentApp = app;
      this.currentFolder = folder || this.currentFolder;
    }
  }
}
</script>

<template>
  <div class="desktop">
    <div class="folders">
      <DesktopFolder
        v-for="(folder, index) in folders"
        :key="index"
        :title="folder"
        @folder-click="openApp"
      />
    </div>
    <DraggableWindow
      v-for="app in apps"
      :key="app.id"
      :name="app.name"
      :show="currentApp === app.id"
      :title="app.title || currentFolder"
      @close-window="currentApp = null"
    >
      <FinderApp
        :current-folder="currentFolder"
        @item-click="(folder) => currentFolder = folder.name"
      />
    </DraggableWindow>
    <div class="dock">
      <DesktopDock
        :apps="apps"
        @icon-click="openApp"
      />
    </div>
  </div>
</template>

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
