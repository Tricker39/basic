<template>
  <tabs-dom :tabs="tabs" v-model:activeKey="key">
    <div v-if="key == '1'">
      <div>标准盒子模型</div>
      <highlightjs language="css" :code="code" />
      <div>怪异盒子模型</div>
    </div>
    <div v-if="key == '2'"></div>
    <div v-if="key == '3'"></div>
  </tabs-dom>
</template>
<script setup>
  import { ref } from 'vue';
  import TabsDom from '@/components/Tabs/Tabs.vue';
  const code = `@mixin mobile {
  @media screen and (max-width : 600px) {
    @content;
  }
}`;

  const tabs = [
    { key: '1', title: '盒模型' },
    { key: '2', title: 'flex 布局' },
    { key: '3', title: 'grid 布局' },
  ];
  const key = ref('1');
</script>
<style scoped></style>
