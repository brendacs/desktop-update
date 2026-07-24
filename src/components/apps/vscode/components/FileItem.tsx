import { toImageMap } from '../../../../utils/images'
import './FileItem.scss'

const icons = toImageMap(
  import.meta.glob('../images/icon-*.svg', { eager: true, import: 'default' })
)

interface Props {
  itemName: string
  itemType?: 'file' | 'tab'
}

export default function FileItem({ itemName, itemType = 'file' }: Props) {
  const ext = itemName.split('.')[1]

  return (
    <div className={itemType}>
      <img className="icon" src={icons[`icon-${ext}.svg`]} alt="" />
      <p>{itemName}</p>
    </div>
  )
}
