<script>
import DesktopDock from './components/DesktopDock'
import DesktopFolder from './components/DesktopFolder'
import DraggableWindow from '../../layout/DraggableWindow'
import FinderApp from '../../apps/finder/FinderApp'
import TerminalApp from '../../apps/terminal/TerminalApp'
import UserApp from '../../apps/user/UserApp'
import UserTag from './components/UserTag'
import VscodeApp from '../../apps/vscode/VscodeApp'

export default {
  name: 'MacDesktop',
  components: {
    DesktopDock,
    DesktopFolder,
    DraggableWindow,
    FinderApp,
    TerminalApp,
    UserApp,
    UserTag,
    VscodeApp
  },
  data() {
    return {
      apps: {
        finder: { id: 'finder', name: 'Finder' },
        terminal: {
          id: 'terminal',
          name: 'Terminal',
          title: 'brendacs@Brendas-MBP-2020'
        },
        user: { id: 'user', name: 'User', title: 'About This Mac' },
        vscode: { id: 'vscode', name: 'VSCode', title: 'Visual Studio Code' }
      },
      currentApp: null,
      currentFolder: 'Education',
      folders: ['Education', 'Experience', 'Projects', 'Writing', 'Documents'],
      openedFromDesktop: false
    }
  },
  methods: {
    openApp(app, folder) {
      this.currentApp = app
      this.currentFolder = folder || this.currentFolder
      this.openedFromDesktop = true
    }
  }
}
</script>

<template>
  <div class="desktop">
    <UserTag @tag-click="openApp" />
    <DraggableWindow
      :name="apps.user.name"
      :show="currentApp === apps.user.id"
      :title="apps.user.title"
      @close-window="currentApp = null"
    >
      <UserApp />
    </DraggableWindow>
    <div class="folders">
      <DesktopFolder
        v-for="(folder, index) in folders"
        :key="index"
        :title="folder"
        @folder-click="openApp"
      />
    </div>
    <DraggableWindow
      :name="apps.finder.name"
      :show="currentApp === apps.finder.id"
      :title="apps.finder.title || currentFolder"
      @close-window="currentApp = null"
    >
      <FinderApp
        :current-folder="currentFolder"
        :opened-from-desktop="openedFromDesktop"
        @item-click="folder => (currentFolder = folder.name)"
      />
    </DraggableWindow>
    <DraggableWindow
      :name="apps.vscode.name"
      :show="currentApp === apps.vscode.id"
      :title="apps.vscode.title"
      @close-window="currentApp = null"
    >
      <VscodeApp />
    </DraggableWindow>
    <DraggableWindow
      :name="apps.terminal.name"
      :show="currentApp === apps.terminal.id"
      :title="apps.terminal.title"
      @close-window="currentApp = null"
    >
      <TerminalApp />
    </DraggableWindow>
    <div class="dock">
      <DesktopDock :apps="apps" @icon-click="openApp" />
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../../assets/scss/mixins';

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
