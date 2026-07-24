import { toImageMap } from '../../../../utils/images'
import './DockIcon.scss'

const images = toImageMap(
  import.meta.glob('../images/*.png', { eager: true, import: 'default' })
)

interface Props {
  name: string
  onClick: () => void
}

export default function DockIcon({ name, onClick }: Props) {
  const src = images[`${name.toLowerCase()}.png`]

  return (
    <div className="dock-icon-container">
      <p className="dock-icon-label">{name}</p>
      <div className="label-triangle" />
      <a className="dock-icon-link" onClick={onClick}>
        <img className="dock-icon" src={src} alt={name} />
      </a>
    </div>
  )
}
