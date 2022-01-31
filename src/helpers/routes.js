export function pathParamsReplace (path, params) {
  let newPath = path
  Object.entries(params).forEach(([name, value]) => {
    newPath = newPath.replace(new RegExp(`:${name}`), value)
  })

  return newPath
}
