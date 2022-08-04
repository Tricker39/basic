<template>
  <div class="i-icon-park-outline-a-cane"></div>
  <div class="i-icon-park-outline-home"></div>
  <div :class="icon"></div>
  <div @click="_bindSwitch">切换</div>
</template>
<script setup>
  import { ref } from 'vue';
  const icon = ref('i-icon-park-outline-filter');
  const _bindSwitch = () => {
    icon.value =
      icon.value === 'i-icon-park-outline-filter'
        ? 'i-icon-park-outline-setting-one'
        : 'i-icon-park-outline-filter';
  };
</script>
<style scoped></style>
