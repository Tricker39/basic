<template>
  <div class="tabs">
    <div class="head">
      <div
        class="item"
        :class="{ active: item.key == activeKey }"
        v-for="item in tabs"
        @click="
          (e) => {
            _bindSelect(e, item);
          }
        "
      >
        {{ item.title }}
      </div>
      <div
        class="head-bar"
        :style="{
          maxWidth: `${maxWidth}px`,
          left: `${left}px`,
          transform: `translateX(${(maxWidth - 30) / 2}px)`,
        }"
      ></div>
    </div>
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
  import { ref, onMounted } from 'vue';
  const props = defineProps({
    tabs: Array,
    activeKey: String,
  });
  const emits = defineEmits(['update:activeKey']);
  const maxWidth = ref(0);
  const left = ref(0);
  onMounted(() => {
    const index = props.tabs.findIndex((item) => item.key == props.activeKey);
    if (index > -1) {
      try {
        const itemDom = document.querySelectorAll(`.tabs .head .item`)[index];
        maxWidth.value = itemDom.offsetWidth;
        left.value = itemDom.offsetLeft;
      } catch (error) {
        throw new Error(error);
      }
    }
  });

  const _bindSelect = (e, item) => {
    e.stopPropagation();
    maxWidth.value = e.currentTarget.offsetWidth;
    left.value = e.currentTarget.offsetLeft;
    emits('update:activeKey', item.key);
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
    color: var(--primary-color);
  }
  .head .head-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    transform: translateX(calc(50% + 15px));
    transition: left 0.3s ease-in-out;
    background: var(--primary-color);
  }

  .tabs .body {
    flex: 1;
    padding: 12px 16px;
  }
</style>
