import wallpaper from '../images/lakeside-wallpaper.jpg'
import './UserTag.scss'

interface Props {
  onClick: () => void
}

export default function UserTag({ onClick }: Props) {
  return (
    <div className="tag" onClick={onClick}>
      <img src={wallpaper} alt="user" />
    </div>
  )
}
