<template>
  123123
  <div class="i-icon-park-solid-home"></div>
  <div :class="'i-icon-park-solid-home'"></div>
  <!-- <div class="item" v-for="item in menus">
    <div class="item-title"><div :class="['icon', item.icon]"></div>{{ item.title }}</div>
    <div class="child">
      <div
        v-for="subitem in item.children"
        class="child-item"
        :class="{ active: subitem.path == routePath }"
        @click="_bindGoPage(subitem)"
      >
        <div :class="['icon', subitem.icon]"></div>{{ subitem.title }}
      </div>
    </div>
  </div> -->
  <div :class="'i-icon-park-outline-acoustic'"></div>
  <div class="i-icon-park-outline-ad-product"></div>
  <div :class="icon"></div>
</template>
<script setup>
  import { ref, onMounted } from 'vue';
  const icon = ref('');

  setTimeout(() => {
    icon.value = 'i-icon-park-outline-accept-email';
  }, 3 * 1000);
  // import { basicRoutes } from '@/routers/routes.js';
  // const icons = [
  //   'i-icon-park-outline-home',
  //   'i-icon-park-outline-dislike',
  //   'i-icon-park-outline-heart',
  //   'i-icon-park-outline-like',
  //   'i-icon-park-outline-loading',
  //   'i-icon-park-outline-setting',
  //   'i-icon-park-outline-setting-two',
  //   'i-icon-park-outline-setting-one',
  //   'i-icon-park-outline-page',
  // ];
  // const menus = ref();
  // setTimeout(() => {
  //   const routes = JSON.parse(JSON.stringify(basicRoutes));
  //   const menuClone = JSON.parse(JSON.stringify(_handleRoutes(routes)));
  //   console.log(menuClone);
  //   menus.value = menuClone;
  // }, 5000);
  // const _handleRoutes = (routes) => {
  //   if (!routes) {
  //     return [];
  //   }
  //   return routes.map((item) => {
  //     return {
  //       icon: item.meta.icon,
  //       title: item.meta.title,
  //       children: _handleRoutes(item.children),
  //     };
  //   });
  // };
</script>
<style scoped></style>
