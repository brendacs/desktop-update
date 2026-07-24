import { useState } from 'react'
import DesktopDock from './components/DesktopDock'
import DesktopFolder from './components/DesktopFolder'
import DraggableWindow from '../../layout/DraggableWindow'
import FinderApp from '../../apps/finder/FinderApp'
import TerminalApp from '../../apps/terminal/TerminalApp'
import UserApp from '../../apps/user/UserApp'
import UserTag from './components/UserTag'
import VscodeApp from '../../apps/vscode/VscodeApp'
import { AppMeta } from '../../../types'
import './MacDesktop.scss'

const apps: Record<'finder' | 'terminal' | 'user' | 'vscode', AppMeta> = {
  finder: { id: 'finder', name: 'Finder' },
  terminal: {
    id: 'terminal',
    name: 'Terminal',
    title: 'brendacs@Brendas-MBP-2020',
  },
  user: { id: 'user', name: 'User', title: 'About This Mac' },
  vscode: { id: 'vscode', name: 'VSCode', title: 'Visual Studio Code' },
}

const folders = ['Education', 'Experience', 'Projects', 'Writing', 'Documents']

export default function MacDesktop() {
  const [currentApp, setCurrentApp] = useState<string | null>(null)
  const [currentFolder, setCurrentFolder] = useState('Education')
  const [openedFromDesktop, setOpenedFromDesktop] = useState(false)

  const openApp = (app: string, folder?: string) => {
    setCurrentApp(app)
    if (folder) setCurrentFolder(folder)
    setOpenedFromDesktop(true)
  }
  const closeWindow = () => setCurrentApp(null)

  return (
    <div className="desktop">
      <UserTag onClick={() => openApp('user')} />
      <DraggableWindow
        name={apps.user.name}
        show={currentApp === apps.user.id}
        title={apps.user.title || ''}
        onClose={closeWindow}
      >
        <UserApp />
      </DraggableWindow>
      <div className="folders">
        {folders.map((folder, index) => (
          <DesktopFolder
            key={index}
            title={folder}
            onClick={() => openApp('finder', folder)}
          />
        ))}
      </div>
      <DraggableWindow
        name={apps.finder.name}
        show={currentApp === apps.finder.id}
        title={apps.finder.title || currentFolder}
        onClose={closeWindow}
      >
        <FinderApp
          currentFolder={currentFolder}
          openedFromDesktop={openedFromDesktop}
          onFolderChange={setCurrentFolder}
          onItemOpen={() => setOpenedFromDesktop(false)}
        />
      </DraggableWindow>
      <DraggableWindow
        name={apps.vscode.name}
        show={currentApp === apps.vscode.id}
        title={apps.vscode.title || ''}
        onClose={closeWindow}
      >
        <VscodeApp />
      </DraggableWindow>
      <DraggableWindow
        name={apps.terminal.name}
        show={currentApp === apps.terminal.id}
        title={apps.terminal.title || ''}
        onClose={closeWindow}
      >
        <TerminalApp />
      </DraggableWindow>
      <div className="dock-wrapper">
        <DesktopDock
          apps={[apps.finder, apps.terminal, apps.vscode]}
          onIconClick={openApp}
        />
      </div>
    </div>
  )
}
