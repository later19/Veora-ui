import { App, Component } from 'vue'

// 扩展组件类型，让它包含 install 方法
type SFCWithInstall<T> = T & { install(app: App): void }

export const withInstall = <T extends Component>(
  comp: T,
): SFCWithInstall<T> => {
  ;(comp as SFCWithInstall<T>).install = (app: App) => {
    const name = comp.name || (comp as any).__name
    if (name) {
      app.component(name, comp)
    } else {
      console.warn('Component is missing a name.')
    }
  }
  return comp as SFCWithInstall<T>
}
