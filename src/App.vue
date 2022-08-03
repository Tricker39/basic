<template>
  <div class="content">
    <div class="left">
      <div
        class="item"
        :class="{ active: item.path == routePath }"
        v-for="item in basicRoutes"
        @click="_bindGoPage(item)"
      >
        <icon :type="item.meta.icon" class="icon" :size="16" /> {{ item.meta.title }}
      </div>
    </div>
    <div class="right"><router-view></router-view></div>
  </div>
</template>
<script setup>
  import { computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { basicRoutes } from '@/routers/routes.js';

  const router = useRouter();
  const routePath = computed(() => useRoute().path);
  const _bindGoPage = (item) => {
    router.push({ path: item.path });
  };
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }
  html {
    color: #fff;
  }
  body {
    background-color: #101014;
  }
  code {
    display: block;
    padding: 16px;
    font-size: 16px;
    font-family: 'Operator Mono Lig Light', 'IBM Plex Mono', 'Dank Mono', monospace;
  }
  .content {
    display: flex;
    height: 100vh;
  }
  .left {
    width: 192px;
    background: #18181c;
  }
  .left .item {
    display: flex;
    align-items: center;
    padding: 0 16px;
    height: 40px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
  }
  .left .item:hover {
    font-weight: bold;
    color: #63e2b7;
    background: #252529;
  }
  .left .item.active {
    font-weight: bold;
    color: #63e2b7;
    background: #252529;
  }
  .left .item .icon {
    margin-right: 8px;
  }
  .right {
    flex: 1;
  }
</style>
