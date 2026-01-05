declare module 'asciinema-player' {
  export interface AsciinemaPlayerOptions {
    cols?: number
    rows?: number
    autoPlay?: boolean
    loop?: boolean | number
    startAt?: number | string
    speed?: number
    idleTimeLimit?: number
    theme?: string
    poster?: string
    fit?: 'width' | 'height' | 'both' | false
    controls?: boolean | 'auto'
    markers?: Array<[number, string]>
    pauseOnMarkers?: boolean
    terminalFontSize?: 'small' | 'medium' | 'big' | string
    terminalFontFamily?: string
    terminalLineHeight?: number
  }

  export interface AsciinemaPlayerInstance {
    play(): void
    pause(): void
    seek(time: number): void
    getCurrentTime(): number
    getDuration(): number
    dispose(): void
    addEventListener(
      type: 'ready' | 'play' | 'playing' | 'pause' | 'ended' | 'input',
      listener: EventListenerOrEventListenerObject
    ): void
  }
  
  export function create(
    src: string,
    element: HTMLElement,
    options?: AsciinemaPlayerOptions
  ): AsciinemaPlayerInstance
}