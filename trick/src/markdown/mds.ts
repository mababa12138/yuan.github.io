import jsCheat from './md/js-cheat.md?raw'
import Algorithm from './md/Algorithm.md?raw'
import HTTP from './md/HTTP.md?raw'
import CSS揭秘 from './md/CSS.md?raw'

export interface MDS {
  ['jsCheat']: string,
  ['Algorithm']: string,
  ['HTTP']: string,
  ['CSS揭秘']: string
}

const mds: MDS = {
  jsCheat,
  Algorithm,
  HTTP,
  CSS揭秘
}

export default mds
