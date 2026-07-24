declare module 'react-console-emulator' {
  import { Component, CSSProperties } from 'react'

  export interface TerminalCommand {
    description?: string
    usage?: string
    fn: (...args: string[]) => string | void
  }

  export interface TerminalProps {
    commands: Record<string, TerminalCommand>
    welcomeMessage?: string | string[] | boolean
    promptLabel?: string | (() => string)
    errorText?: string
    noDefaults?: boolean
    ignoreCommandCase?: boolean
    autoFocus?: boolean
    noAutoScroll?: boolean
    className?: string
    contentClassName?: string
    inputAreaClassName?: string
    promptLabelClassName?: string
    inputClassName?: string
    messageClassName?: string
    style?: CSSProperties
    contentStyle?: CSSProperties
    inputAreaStyle?: CSSProperties
    promptLabelStyle?: CSSProperties
    inputStyle?: CSSProperties
    inputTextStyle?: CSSProperties
    messageStyle?: CSSProperties
  }

  export default class Terminal extends Component<TerminalProps> {}
}
