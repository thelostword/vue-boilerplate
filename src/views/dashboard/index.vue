<!--
 * @Author: losting
 * @Date: 2022-05-18 10:09:31
 * @LastEditTime: 2022-06-13 11:52:36
 * @LastEditors: losting
 * @Description:
 * @FilePath: \vite-vue3-template\src\views\dashboard\index.vue
-->
<template>
  <div class="dashboard">
    <form>
      <input
        v-model="state.username"
        type="text"
        placeholder="请输入用户名"
      ><br>

      <input
        v-model="state.password"
        type="text"
        placeholder="请输入密码"
      ><br>
      <input
        v-model="state.code"
        placeholder="请输入验证码"
      ><br>

      <button @click.prevent="handleSubmit">
        提交
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();

const state = reactive({
  username: '',
  password: '',
  code: '12',

  codeImg: '',
  isLoading: false,
  isRememberMe: false,
});

const handleSubmit = () => {
  state.isLoading = true;
  userStore.login({
    username: state.username,
    password: state.password,
    code: state.code,
  })
    .then(() => {
      console.log('login success');
    })
    .finally(() => {
      state.isLoading = false;
    });
};
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
}
</style>
