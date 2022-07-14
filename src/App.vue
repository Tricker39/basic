<template>
  <div class="content">
    <div class="left">
      <div class="item" :class="{ active: item.path == routePath }" v-for="item in basicRoutes">
        {{ item.meta.title }}</div
      >
    </div>
    <div class="right"><router-view></router-view></div>
  </div>
</template>
<script setup>
  import { basicRoutes } from '@/routers/routes.js';
  import { useRoute } from 'vue-router';
  const routePath = useRoute().path;
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #101014;
  }
  .content {
    display: flex;
    height: 100vh;
  }
  .left {
    width: 160px;
    background: #18181c;
  }
  .left .item {
    padding: 10px;
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
