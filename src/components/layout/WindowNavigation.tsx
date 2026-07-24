import './WindowNavigation.scss'

interface Props {
  title: string
  onClose: () => void
}

export default function WindowNavigation({ title, onClose }: Props) {
  return (
    <div className={`window-nav ${title === 'Visual Studio Code' ? 'vscode' : ''}`}>
      <div className="window-button-container">
        <a className="window-button button-close" onClick={onClose} />
        <a className="window-button button-min" />
        <a className="window-button button-expand" />
      </div>
      <div className="window-title-container">
        <p>{title}</p>
      </div>
    </div>
  )
}
