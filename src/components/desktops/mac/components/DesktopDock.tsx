import DockIcon from './DockIcon'
import { AppMeta } from '../../../../types'
import './DesktopDock.scss'

interface Props {
  apps: AppMeta[]
  onIconClick: (id: string) => void
}

export default function DesktopDock({ apps, onIconClick }: Props) {
  return (
    <div className="dock">
      {apps.map((app) => (
        <DockIcon
          key={app.id}
          name={app.name}
          onClick={() => onIconClick(app.id)}
        />
      ))}
    </div>
  )
}
