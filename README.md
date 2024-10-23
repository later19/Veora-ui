# Veora-ui
Veora-ui

## 安装依赖

```bash
pnpm install
```

## 启动项目

```bash
cd example

pnpm dev
```

## 开发一个组件

### 编写组件代码
1. 在 `packages/components/src` 目录下创建一个组件文件夹，例如 `button`
2. 在 `button` 文件夹下创建 `index.vue` 文件并编写组件代码
4. 在 `button` 文件夹下创建 `index.ts` 文件, 在 `index.ts` 中导入组件注册后导出
```ts
import withInstall from '../utils/withInstall';
import button from './index.vue';

const Button = withInstall(button);
export default Button;
```
5. 在 `packages/components/src/index.ts` 文件中导入组件
```ts
import VButton from './button'

export { VButton }

export default [VButton]
```

### 打包组件

在 `packages/components` 目录下执行
```bash
pnpm build
```

### 预览组件

在 `example` 目录下导入组件并使用

```vue
<script setup lang="ts">
import { VButton } from 'veora-ui'
</script>

<template>
  <div>
    <v-button>Button</v-button>
  </div>
</template>
```
