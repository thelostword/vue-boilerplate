<!--
 * @Author: losting
 * @Date: 2022-05-18 10:09:31
 * @LastEditTime: 2022-05-19 09:26:08
 * @LastEditors: losting
 * @Description:
 * @FilePath: \vite-vue3-template\src\views\dashboard\index.vue
-->
<script setup>
import { onMounted } from 'vue';
import { useGlobalStore } from '@/store/global';
import { storeToRefs } from 'pinia';

const COMPONENT = 'dashboard';

const globalStore = useGlobalStore();
const { isLoading } = storeToRefs(globalStore);

console.log(import.meta.env);

onMounted(() => {

});
</script>

<template>
  <div :class="COMPONENT">
    <button @click="globalStore.setLoading(!isLoading)">
      切换
    </button>
  </div>
</template>

<style lang="scss" scoped>
$COMPONENT: '.dashboard';
#{$COMPONENT} {
  display: flex;
}
</style>
