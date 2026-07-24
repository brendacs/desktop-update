import { useState } from 'react'
import FinderItem from './components/FinderItem'
import ItemDescription from './components/ItemDescription'
import rawFinderData from './data/finderData.json'
import { FinderData, FinderFile, FinderFolder } from '../../../types'
import './FinderApp.scss'

const finderData = rawFinderData as unknown as FinderData

interface Props {
  currentFolder: string
  openedFromDesktop: boolean
  onFolderChange: (name: string) => void
  onItemOpen: () => void
}

export default function FinderApp({
  currentFolder,
  openedFromDesktop,
  onFolderChange,
  onItemOpen,
}: Props) {
  const [currentItem, setCurrentItem] = useState<FinderFile | null>(null)
  const [expanded, setExpanded] = useState(false)

  const selectFolder = (folder: FinderFolder) => {
    setCurrentItem(null)
    setExpanded(false)
    onFolderChange(folder.name)
  }

  const selectItem = (item: FinderFile) => {
    onItemOpen()
    setCurrentItem(item)
    setExpanded(false)
  }

  const items = finderData.items[currentFolder.toLowerCase()] ?? {}

  return (
    <div className="finder-file-container">
      <div className="finder-section">
        {Object.entries(finderData.folders).map(([key, folder]) => (
          <FinderItem
            key={key}
            currentFolder={currentFolder}
            finderItem={folder}
            type="folder"
            onItemClick={() => selectFolder(folder)}
          />
        ))}
      </div>
      <div className="finder-section">
        {Object.entries(items).map(([key, item]) => (
          <FinderItem
            key={key}
            currentItem={currentItem}
            finderItem={item}
            type="item"
            onItemClick={() => selectItem(item)}
          />
        ))}
      </div>
      <div className="finder-section">
        <ItemDescription
          expanded={expanded}
          item={openedFromDesktop ? {} : (currentItem ?? {})}
          onShowClick={() => setExpanded((e) => !e)}
        />
      </div>
    </div>
  )
}
