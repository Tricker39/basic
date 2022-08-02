<template>
  <div class="tabs">
    <div class="head">
      <div
        class="item"
        :class="{ active: item.key == key }"
        v-for="item in tabs"
        @click="
          (e) => {
            _bindSelect(e, item);
          }
        "
      >
        {{ item.title }}
      </div>
      <div class="head-bar" :style="{ maxWidth: `${maxWidth}px`, left: `${left}px` }"></div>
    </div>
    <div class="body"></div>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  defineProps({
    tabs: Array,
  });
  const maxWidth = ref(0);
  const left = ref(0);
  const key = ref('1');
  const _bindSelect = (e, item) => {
    e.stopPropagation();
    console.log(' ', e);
    maxWidth.value = e.currentTarget.offsetWidth;
    left.value = e.currentTarget.offsetLeft;
    key.value = item.key;
  };
</script>
<style scoped>
  .tabs {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .tabs .head {
    position: relative;
    display: flex;
    line-height: 40px;
    background: #18181c;
  }
  .head .item {
    padding: 0 16px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
  }
  .item.active {
    color: #63e2b7;
  }
  .head .head-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    transform: translateX(calc(50% + 15px));
    transition: left 0.3s ease-in-out;
    background: #63e2b7;
  }

  .tabs .body {
    flex: 1;
  }
</style>
