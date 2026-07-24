import directoryIcon from '../images/directory.png'
import './DesktopFolder.scss'

interface Props {
  title: string
  onClick: () => void
}

export default function DesktopFolder({ title, onClick }: Props) {
  return (
    <div className="desktop-icon-container" onClick={onClick}>
      <img className="desktop-icon" src={directoryIcon} alt={title} />
      <p>{title}</p>
    </div>
  )
}
