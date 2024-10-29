<template>
  <button
    class="button"
    :class="[
      typeClass,
      { 'is-plain': plain },
      { 'is-round': round },
      { 'is-circle': circle },
      { 'is-disabled': disabled },
    ]"
  >
    <slot></slot>
  </button>
</template>

<script name="VButton" lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'default',
  },
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
const typeClass = computed(() => `button-${props.type}`)
</script>

<style lang="scss" scoped>
@import url(./style/index.scss);
</style>
