<template>
  <div class="content">
    <div class="section-title">元素选择器</div>
    <div class="code-preview-box">
      <div class="code-box"><highlightjs language="html" :code="code" /></div>
      <div class="code-preview"> <p></p></div>
    </div>
    <div class="section-title">id 选择器</div>
    <div class="code-preview-box">
      <div class="code-box"><highlightjs language="html" :code="code1" /></div>
      <div class="code-preview"> <div id="box"></div></div>
    </div>
    <div class="section-title">class 选择器</div>
    <div class="code-preview-box">
      <div class="code-box"><highlightjs language="html" :code="code2" /></div>
      <div class="code-preview"> <div class="box"></div></div>
    </div>
    <div class="section-title">class 选择器</div>
    <div class="code-preview-box">
      <div class="code-box"><highlightjs language="html" :code="code2" /></div>
      <div class="code-preview"> <div class="box"></div></div>
    </div>
  </div>
</template>
<script setup>
  import { code, code1, code2 } from './selectorCode';
</script>
<style scoped>
  .content {
    box-sizing: border-box;
    padding: 12px 16px;
    width: 100%;
  }
  #box {
    width: 100px;
    height: 100px;
    background-color: #63e2b7;
  }
  .box {
    width: 100px;
    height: 100px;
    background-color: #63e2b7;
  }
  p {
    width: 100px;
    height: 100px;
    background-color: #63e2b7;
  }
</style>
