import { toImageMap } from '../../../../utils/images'
import { FinderFile, FinderFolder } from '../../../../types'
import './FinderItem.scss'

const images = toImageMap(
  import.meta.glob('../images/*', { eager: true, import: 'default' })
)

const exts = ['jpg', 'png']

function hasValidExtension(name: string | undefined, valid: string[]): boolean {
  if (!name) return false
  const ext = name.split('.')[1]
  if (!ext) return false
  return valid.some((e) => ext.includes(e))
}

interface Props {
  finderItem: FinderFile | FinderFolder
  type: 'folder' | 'item'
  currentFolder?: string
  currentItem?: FinderFile | null
  onItemClick: () => void
}

export default function FinderItem({
  finderItem,
  type,
  currentFolder,
  currentItem,
  onItemClick,
}: Props) {
  const selected =
    currentFolder === finderItem.name ||
    (!!currentItem && currentItem.id === finderItem.id)

  const imageClass = `finder-${type}-icon image-${
    type === 'item' && hasValidExtension(finderItem.name, exts)
  }`

  return (
    <div
      className={`finder-item-container ${selected ? 'selected' : ''}`}
      onClick={onItemClick}
    >
      <div>
        <img className={imageClass} src={images[finderItem.image]} alt="" />
      </div>
      <div className="name">
        <p>{finderItem.name}</p>
        <span className={type === 'item' ? 'hide' : ''}>▲</span>
      </div>
    </div>
  )
}
