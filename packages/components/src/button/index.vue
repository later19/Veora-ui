<template>
  <button
    class="button"
    disabled
    :class="[
      typeClass,
      sizeClass,
      { 'is-plain': plain },
      { 'is-round': round },
      { 'is-circle': circle },
      { 'is-disabled': disabled },
      { 'is-link': link },
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
    validator: (value: string) =>
      ['default', 'success', 'primary', 'error', 'warning', 'info'].includes(
        value,
      ),
  },
  size: {
    type: String,
    default: 'default',
    validator: (value: string) => ['default', 'large', 'small'].includes(value),
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
  link: {
    type: Boolean,
    default: false,
  },
})
const typeClass = computed(() => `button-${props.type}`)
const sizeClass = computed(() => `button-${props.size}`)
</script>

<style lang="scss" scoped>
@import url(./style/index.scss);
</style>
