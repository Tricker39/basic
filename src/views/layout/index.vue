<template>
  <div>
    <tabs-dom :tabs="tabs" v-model:key="key"></tabs-dom>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import TabsDom from '@/components/Tabs/Tabs.vue';

  const tabs = [
    { key: '1', title: 'flex 布局' },
    { key: '2', title: 'grid 布局' },
    { key: '3', title: '其他 布局' },
  ];
  const key = ref('1');
</script>
<style scoped></style>
