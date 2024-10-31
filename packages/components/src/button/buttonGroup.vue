<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script name="VButtonGroup" lang="ts" setup>
import { computed } from 'vue'
// const props = defineProps({
//   type: {
//     type: String,
//     default: 'default',
//     validator: (value: string) =>
//       ['default', 'success', 'primary', 'error', 'warning', 'info'].includes(
//         value,
//       ),
//   },
// })
</script>

<style lang="scss" scoped>
@import url(./style/buttonGroup.scss);
</style>
