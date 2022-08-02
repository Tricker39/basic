<template>
  <div class="content">
    <div class="left">
      <div
        class="item"
        :class="{ active: item.path == routePath }"
        v-for="item in basicRoutes"
        @click="_bindGoPage(item)"
      >
        {{ item.meta.title }}</div
      >
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
  .content {
    display: flex;
    height: 100vh;
  }
  .left {
    width: 192px;
    background: #18181c;
  }
  .left .item {
    padding: 0 16px;
    line-height: 40px;
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
  .right {
    flex: 1;
  }
</style>
