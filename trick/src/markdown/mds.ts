import jsCheat from './md/js-cheat.md?raw'

export interface MDS {
  [jsCheat: string]: string
}

const mds: MDS = {
  jsCheat
}

export default mds
