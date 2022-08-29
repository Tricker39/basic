<template>
  <div class="content">
    <waterfall :list="routes" row-key="name">
      <template #item="{ item, url, index }">
        <div
          class="card"
          w:cursor="pointer"
          :imgSelector="item.meta.image"
          :hasAroundGutter="true"
          :delay="400"
        >
          <lazy-img :url="item.meta.image" class="waterfall-image" />
          <!-- <img :src="item.meta.image" /> -->
          <p class="text">{{ item.meta.title }}</p>
        </div>
      </template>
    </waterfall>
    <page-preview
      v-if="showFlag"
      link="https://mastergo.com/community/resource/2105?from=card"
      url="/page/uiChina"
      title="UI 中国"
    ></page-preview>
  </div>
</template>
<script setup>
  import { ref, onMounted } from 'vue';
  import { basicRoutes } from '@/routers/routes.js';
  import { Waterfall, LazyImg } from 'vue-waterfall-plugin-next';
  import 'vue-waterfall-plugin-next/style.css';
  import PagePreview from '@/components/PagePreview/PagePreview.vue';

  const showFlag = ref(false);
  const routes = ref([]);
  onMounted(async () => {
    routes.value = basicRoutes[2].children[0].children;
  });
</script>
<style scoped>
  .content {
    height: 100%;
  }
  .content :deep(.waterfall-list) {
    background: none;
  }
  .card .text {
    position: absolute;
    bottom: 0;
    width: 100%;
    line-height: 40px;
    text-align: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), transparent);
  }
</style>
