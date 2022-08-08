<template>
  <div class="modal">
    <div class="modal-mask"></div>
    <div class="modal-box">
      <div class="modal-close i-icon-park-outline-close"></div>
      <div class="modal-title" @click="_bindGoUiPage">{{ title }}</div>
      <div class="modal-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const props = defineProps({
    link: { type: String, default: '' },
    url: { type: String, default: '' },
    title: { type: String, default: '' },
  });
  onMounted(() => {
    router.push({ path: props.url });
  });
  const _bindGoUiPage = () => {
    window.open(props.link, '_blank');
  };
</script>
<style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
  }
  .modal-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .modal-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .modal-box .modal-title {
    padding: 8px 16px;
    font-size: 16px;
    font-weight: bold;
    color: #868693;
    cursor: pointer;
    background: #0e0e11;
  }
  .modal-box .modal-close {
    position: absolute;
    top: 9px;
    right: 8px;
    cursor: pointer;
  }
  .modal-box .modal-content {
    height: 667px;
    /* overflow: auto; */
  }
</style>
