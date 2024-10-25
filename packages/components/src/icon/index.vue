<template>
  <span
    class="icon"
    :style="{ fontSize: size + 'px', color: color }"
    v-bind="$attrs"
  >
    <component :is="iconComponent" v-if="iconComponent" aria-hidden="true" />
    <span v-else class="icon-error">Icon Not Found</span>
  </span>
</template>

<script name="VButton" lang="ts" setup>
import { ref, watch } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: '13',
  },
  color: {
    type: String,
    default: 'default',
  },
})

// 使用 ref 来存储动态导入的图标组件
const iconComponent = ref(null)

// 定义一个函数来动态导入 SVG 图标
const loadIcon = async (iconName) => {
  try {
    // 动态导入 SVG 图标，并使用 default 获取组件
    const module = await import(`./svg/${iconName}.svg`)
    iconComponent.value = module.default // 确保使用 default
    console.log(iconComponent.value)
  } catch (e) {
    // console.error(e)
    console.error(`Icon "${iconName}" not found.`)
    iconComponent.value = null // 如果找不到图标，设置为 null
  }
}

// 监视 props.name 的变化
watch(
  () => props.name,
  (newName) => {
    loadIcon(newName) // 调用加载图标的函数
  },
  { immediate: true },
) // immediate: true 在组件初始时也会执行

// 在组件初始化时加载图标
loadIcon(props.name) // 组件挂载时加载初始图标
</script>

<style lang="scss" scoped>
.icon-error {
  color: red;
}
</style>
