import mds, { MDS } from './mds'
import marked from "marked"
import hljs from "highlight.js";

marked.setOptions({
  highlight: function(code:string) {
    return hljs.highlight(code, {language: 'javascript'}).value;
  },
})

const htmlStrings = Object.keys(mds).reduce((acc: MDS, cur: string): object => {
  acc[cur] = marked(mds[cur], { sanitize: true }).replace(/<pre>/g, "<pre class='hljs'>")
  return acc
}, {})

export default htmlStrings
