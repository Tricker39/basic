<template>
  <div class="page-content">
    <div class="left">
      <div class="item" v-for="item in routePath">
        <div class="item-title"
          ><div :class="['icon', item.meta.icon]"></div>{{ item.meta.title }}</div
        >
        <div class="child">
          <div
            v-for="subitem in item.children"
            class="child-item"
            :class="{ active: subitem.path == routePath }"
            @click="_bindGoPage(subitem)"
          >
            <div :class="['icon', subitem.meta.icon]"></div>{{ subitem.meta.title }}
          </div>
        </div>
      </div>
    </div>
    <div class="right"><router-view></router-view></div>
  </div>
</template>
<script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';

  const router = useRouter();
  const routePath = ref([]);
  onMounted(async () => {
    axios
      .get('https://www.fastmock.site/mock/6d96d8787248021f989c4bf9615ff464/basic/getMenus')
      .then((res) => {
        console.log('res', res);
        routePath.value = res.data.result.menus;
      });
  });
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
  pre {
    height: 100%;
  }
  code {
    box-sizing: border-box;
    display: block;
    padding: 16px;
    height: 100%;
    font-size: 16px;
    font-family: 'Operator Mono Lig Light', 'IBM Plex Mono', 'Dank Mono', monospace;
  }
  .page-content {
    display: flex;
    height: 100vh;
  }
  .left {
    width: 192px;
    background: #18181c;
  }
  .left > .item {
    align-items: center;
    padding: 0 16px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
  }
  .left .item .icon {
    margin-right: 8px;
  }
  .left .item .item-title {
    display: flex;
    align-items: center;
    line-height: 32px;
    color: #57575e;
    font-weight: bold;
    font-size: 12px;
  }
  .left .item .child .child-item {
    display: flex;
    align-items: center;
    padding-left: 16px;
    line-height: 40px;
    color: #868693;
  }
  .left .item .child .child-item:hover {
    font-weight: bold;
    color: var(--primary-color);
    background: #252529;
  }
  .left .item .child .child-item.active {
    font-weight: bold;
    color: var(--primary-color);
    background: #252529;
  }
  .right {
    flex: 1;
    overflow: auto;
  }
</style>
