import { useState } from 'react'
import MacDesktop from './components/desktops/mac/MacDesktop'
import WindowsDesktop from './components/desktops/windows/WindowsDesktop'

type OS = 'mac' | 'windows'

export default function App() {
  // The Windows desktop is a planned second skin; the switch lives here so
  // either OS can own the full screen.
  const [os] = useState<OS>('mac')

  return (
    <div id="app">
      {os === 'mac' ? <MacDesktop /> : <WindowsDesktop />}
    </div>
  )
}
