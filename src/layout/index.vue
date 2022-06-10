<!--
 * @Author: losting
 * @Date: 2022-05-18 10:08:14
 * @LastEditTime: 2022-05-18 11:35:06
 * @LastEditors: losting
 * @Description:
 * @FilePath: \vite-vue3-template\src\layout\index.vue
-->
<script setup>
import { onMounted } from 'vue';
import { useGlobalStore } from '@/store/global';

const COMPONENT = 'layout';

const globalStore = useGlobalStore();

onMounted(() => {

});
</script>

<template>
  <div :class="COMPONENT">
    {{ globalStore.isLoading }}
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
$COMPONENT: '.layout';
#{$COMPONENT} {
  display: flex;
}
</style>
