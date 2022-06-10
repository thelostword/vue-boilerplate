<!--
 * @Author: losting
 * @Date: 2022-05-18 10:54:36
 * @LastEditTime: 2022-05-18 10:54:38
 * @LastEditors: losting
 * @Description:
 * @FilePath: \vite-vue3-template\src\views\login\index.vue
-->
<script setup>
import { onMounted } from 'vue';

const COMPONENT = 'login';

onMounted(() => {

});

</script>

<template>
  <div :class="COMPONENT">
    {{ COMPONENT }}
  </div>
</template>

<style lang="scss" scope>
$COMPONENT: '.login';
#{$COMPONENT} {
  display: flex;
}
</style>
