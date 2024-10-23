export default (comp: any) => {
  comp.install = (app: any) => {
    const name = comp.name || comp.__name
    app.component(name, comp)
  }
  return comp
}
