import { useMemo } from 'react'
import FileNavigation from './components/FileNavigation'
import TextEditor from './components/TextEditor'
import vscodeData from './data/vscodeData.json'
import filesIcon from './images/vscode-files.png'
import searchIcon from './images/vscode-search.png'
import gitIcon from './images/vscode-git.png'
import debugIcon from './images/vscode-debug.png'
import extIcon from './images/vscode-ext.png'
import './VscodeApp.scss'

type VscodeData = Record<string, unknown>

export default function VscodeApp() {
  const { files, folders } = useMemo(() => {
    const files: string[] = []
    const folders: string[] = []
    for (const item in vscodeData) {
      if (item.includes('.')) files.push(item)
      else folders.push(item)
    }
    return { files, folders }
  }, [])

  return (
    <div className="vscode-window">
      <div className="sidebar">
        <button>
          <img src={filesIcon} alt="files" />
        </button>
        <button>
          <img src={searchIcon} alt="search" />
        </button>
        <button>
          <img src={gitIcon} alt="git" />
        </button>
        <button>
          <img src={debugIcon} alt="debug" />
        </button>
        <button>
          <img src={extIcon} alt="extensions" />
        </button>
      </div>
      <FileNavigation
        files={files}
        folders={folders}
        vscodeData={vscodeData as VscodeData}
      />
      <TextEditor files={files} />
    </div>
  )
}
