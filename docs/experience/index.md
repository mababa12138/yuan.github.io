# 经验分享
## lodash实现
### get
```js
function get(object, path, defaultValue = undefined) {
  if (object == null) return defaultValue
  const paths = path.replace(/\[(\d+)]/g, '.$1').split('.')
  const length = paths.length
  let index = 0
  
  while(object != null && index < length) {
    object = object[paths[index]]
    index += 1
  }
  return (index && index === length) ? object : defaultValue
}
```
