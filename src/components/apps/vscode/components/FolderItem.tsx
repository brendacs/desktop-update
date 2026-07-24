import folderIcon from '../images/icon-folder.svg'
import './FolderItem.scss'

interface Props {
  files: unknown
  itemName: string
  itemType?: 'file' | 'tab'
}

export default function FolderItem({ itemName, itemType = 'file' }: Props) {
  return (
    <div className={itemType}>
      <img className="icon" src={folderIcon} alt="" />
      <p>{itemName}</p>
    </div>
  )
}
