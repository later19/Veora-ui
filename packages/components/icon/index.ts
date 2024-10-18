import { withInstall } from '@veora-ui/utils'

import Icon from './src/icon.vue'
import type { SFCWithInstall } from '@veora-ui/utils'

export const EOIcon: SFCWithInstall<typeof Icon> = withInstall(Icon)
export default EOIcon

export * from './src/icon'