<template>
  <i class="icon" :style="{ width: size + 'px', color: color }" v-bind="$attrs">
    <component :is="iconComponent" :fill="color" aria-hidden="true" />
  </i>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, watchEffect } from 'vue'

// 定义 props
const props = withDefaults(
  defineProps<{
    name: string
    size?: string
    color?: string
  }>(),
  {
    size: '18',
    color: 'blue',
  },
)

// 动态加载 SVG 文件的方法
// 用 ref 存储加载后的图标组件
const iconComponent = ref<null | any>(null)

// 监听 props.name 的变化，并动态加载图标
watchEffect(async () => {
  if (!props.name) {
    iconComponent.value = null
    return
  }

  try {
    const module = await import(`./svg/${props.name}.svg`)
    iconComponent.value = module.default
  } catch (error) {
    console.error(`Failed to load icon: ${props.name}`, error)
    iconComponent.value = null
  }
})
</script>

<style lang="scss" scoped>
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.icon svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
  display: block;
}
.icon-error {
  color: red;
}
</style>
