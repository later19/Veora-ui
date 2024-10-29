<script setup lang="ts">
import { VButton, VIcon } from 'veora-ui'
</script>

<template>
  <div>
    <div>
      <v-button type="default">Button success</v-button>
      <v-button type="primary">Button Primary</v-button>
      <v-button type="error">Button Primary</v-button>
      <v-button type="warning">Button Primary</v-button>
      <v-button type="info">Button Primary</v-button>
    </div>
    <div>
      <v-button type="default" plain>Button success</v-button>
      <v-button type="success" plain>Button success</v-button>
      <v-button type="error" plain>Button success</v-button>
      <v-button type="warning" plain>Button success</v-button>
      <v-button type="info" plain>Button success</v-button>
    </div>
    
    <div>
      <v-button type="default" round>Button success</v-button>
      <v-button type="success" round>Button success</v-button>
      <v-button type="error" disabled round>Button success</v-button>
      <v-button type="warning" round>Button success</v-button>
      <v-button type="info" disabled round>Button success</v-button>
    </div>
    <v-icon name="caozuo-gengduo"></v-icon>
    <v-icon name="shuju"></v-icon>
  </div>
</template>

<style lang="scss" scoped></style>
