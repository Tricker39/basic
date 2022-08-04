<template>
  <tabs-dom :tabs="tabs" v-model:activeKey="key">
    <div v-if="key == '1'">
      <div class="section-title">标准盒子模型</div>
      <div class="code-preview-box">
        <div class="code-box"><highlightjs language="css" :code="code" /></div>
        <div class="code-preview"></div>
      </div>
      <div class="section-title">怪异盒子模型</div>
    </div>
    <div v-if="key == '2'"></div>
    <div v-if="key == '3'"></div>
  </tabs-dom>
</template>
<script setup>
  import { ref } from 'vue';
  import TabsDom from '@/components/Tabs/Tabs.vue';
  const code = ``;

  const tabs = [
    { key: '1', title: '盒模型' },
    { key: '2', title: 'flex 布局' },
    { key: '3', title: 'grid 布局' },
  ];
  const key = ref('1');
</script>
<style scoped></style>
