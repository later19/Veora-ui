<template>
<i :class="ns.b()" :style="style" v-bind="$attrs">
    <slot />
  </i>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { addUnit, isUndefined } from '@veora-ui/utils'
import { useNamespace } from '@veora-ui/hooks'
import { iconProps } from './icon'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'EOIcon',
  inheritAttrs: false,
})
const props = defineProps(iconProps)
const ns = useNamespace('icon')

const style = computed<CSSProperties>(() => {
  const { size, color } = props
  if (!size && !color) return {}

  return {
    fontSize: isUndefined(size) ? undefined : addUnit(size),
    '--color': color,
  }
})
</script>
<style>
i{
    color: red;
}
</style>