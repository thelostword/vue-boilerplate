<!--
 * @Author: losting
 * @Date: 2022-05-18 10:08:14
 * @LastEditTime: 2022-09-16 14:28:59
 * @LastEditors: thelostword
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
  <div :class="`${COMPONENT} bg-orange-500`">
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
