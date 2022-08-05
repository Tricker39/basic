<template>
  <div class="item" v-for="item in routePath">
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
  </div>
</template>
<script setup></script>
<style scoped></style>
