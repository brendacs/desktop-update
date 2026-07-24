import { useMemo, useRef } from 'react'
import Terminal from 'react-console-emulator'
import { cmdData, config, subcmdData } from './utils/constants'
import './TerminalApp.scss'

export default function TerminalApp() {
  // Mutable shell state, mirroring the original jQuery.terminal closure:
  // `cd` mutates the working directory + listing, and `ls`/`pwd` read them.
  const shell = useRef({
    type: 'desktop',
    ls: cmdData.ls,
    pwd: cmdData.pwd,
  })

  const commands = useMemo(
    () => ({
      help: { fn: () => cmdData.help },
      ls: { fn: () => shell.current.ls },
      pwd: { fn: () => shell.current.pwd },
      sudo: { fn: () => cmdData.sudo },
      cd: {
        fn: (...args: string[]) => {
          const subcmd = args[0]?.toLowerCase()
          if (!subcmd) return ''
          const target = subcmdData[subcmd]
          if (!target) return `cd: no such file or directory: ${subcmd}`

          shell.current.ls = target.files
          shell.current.pwd = `~/Brenda_Zhang/Desktop${target.folder}`
          const denied =
            subcmd === '../' && shell.current.type === 'desktop'
          shell.current.type = target.type
          return denied ? 'zsh: cd: permission denied' : ''
        },
      },
    }),
    []
  )

  const greeting = useMemo(() => `Last login: ${new Date()}`, [])

  return (
    <Terminal
      className="terminal"
      commands={commands}
      welcomeMessage={greeting}
      promptLabel={config.prompt}
      errorText="zsh: command not found: [command]"
      ignoreCommandCase
      noDefaults
    />
  )
}
