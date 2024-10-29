<template>
  <span
    class="icon"
    :style="{ width: size + 'px', background: color }"
    v-bind="$attrs"
  >
    <component :is="iconComponent" :fill="color" aria-hidden="true" />
  </span>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'

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

// iconComponent 存储加载的 SVG 组件
const iconComponent = ref<null | any>(null)

// 动态加载 SVG 文件的方法
const loadIcon = async (iconName: string) => {
  try {
    console.log(`Loading icon: ${iconName}`) // 调试信息
    const module = await import(`./svg/${iconName}.svg`)
    iconComponent.value = module.default
    console.log('Icon loaded:', iconComponent.value) // 调试信息
  } catch (error) {
    console.error(`Failed to load icon: ${iconName}`, error)
    iconComponent.value = null
  }
}

// 在组件挂载时加载图标
onMounted(() => {
  loadIcon(props.name)
})

// 监控图标名称变化，并重新加载图标
watch(
  () => props.name,
  (newName) => {
    loadIcon(newName)
  },
)
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
