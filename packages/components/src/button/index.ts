import { withInstall } from '../../../utils/index'
import button from './index.vue'
import buttonGroup from './buttonGroup.vue'

const Button = withInstall(button)
const ButtonGroup = withInstall(buttonGroup)

export default { Button, ButtonGroup }
