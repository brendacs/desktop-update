import { ReactNode } from 'react'
import { Rnd } from 'react-rnd'
import WindowNavigation from './WindowNavigation'
import './DraggableWindow.scss'

interface Props {
  name: string
  show: boolean
  title: string
  onClose: () => void
  children: ReactNode
}

export default function DraggableWindow({
  name,
  show,
  title,
  onClose,
  children,
}: Props) {
  // The Rnd container stays 0x0 (like the original vue-draggable-resizable
  // wrapper); the window itself is absolutely positioned via CSS per app type,
  // and dragging the `.window-nav` handle translates the whole thing.
  return (
    <Rnd
      className="draggable-window"
      dragHandleClassName="window-nav"
      enableResizing={false}
      default={{ x: 0, y: 0, width: 0, height: 0 }}
    >
      <div className={`window ${name.toLowerCase()}-window ${show ? '' : 'hide'}`}>
        <WindowNavigation title={title} onClose={onClose} />
        {children}
      </div>
    </Rnd>
  )
}
