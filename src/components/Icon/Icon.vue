<template>
  <span ref="iconEl"></span>
</template>
<script setup>
  import { IconPark } from '@icon-park/vue-next/es/all';
  import { watch, render, h, onMounted, ref } from 'vue';

  const props = defineProps({
    type: String,
    theme: 'outline' | 'filled' | 'two-tone' | 'multi-color',
    size: Number | String,
    spin: Boolean,
    fill: String | Array,
    strokeLinecap: 'butt' | 'square' | 'round',
    strokeLinejoin: 'miter' | 'bevel' | 'round',
    strokeWidth: Number,
  });
  const iconEl = ref(null);
  //   const toPascalCase = (val) => {
  //     return val.replace(/(^\w|-\w)/g, function (c) {
  //       return c.slice(-1).toUpperCase();
  //     });
  //   };
  const update = async () => {
    render(h(IconPark, props), iconEl.value);
  };
  watch(() => props, update, { flush: 'post' });

  onMounted(update);
</script>
<style lang="less"></style>
