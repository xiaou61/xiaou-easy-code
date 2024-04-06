<template>
  <div>
    <h1>用户管理</h1>
    <form @submit.prevent="createUser">
      <input type="text" v-model="newUser.username" placeholder="用户名" required>
      <input type="email" v-model="newUser.email" placeholder="邮箱" required>
      <button type="submit">创建用户</button>
    </form>

    <h2>搜索用户</h2>
    <input type="text" v-model="searchUsername" placeholder="输入用户名">
    <button @click="searchUser">搜索</button>

    <h2>用户信息</h2>
    <div v-if="user">
      <p><strong>ID:</strong> {{ user.id }}</p>
      <p><strong>用户名:</strong> {{ user.username }}</p>
      <p><strong>邮箱:</strong> {{ user.email }}</p>
    </div>

    <h2>更新用户信息</h2>
    <form v-if="user" @submit.prevent="updateUser">
      <input type="text" v-model="updateUserModel.username" placeholder="用户名" required>
      <input type="email" v-model="updateUserModel.email" placeholder="邮箱" required>
      <button type="submit">更新用户信息</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const newUser = ref({ username: '', email: '' });
const user = ref(null);
const searchUsername = ref('');
const updateUserModel = ref({ username: '', email: '' });

const createUser = async () => {
  try {
    const response = await axios.post('/api/users', newUser.value);
    user.value = response.data;
    newUser.value = { username: '', email: '' }; // 清空表单
  } catch (error) {
    console.error('创建用户失败:', error);
  }
};

const searchUser = async () => {
  try {
    const response = await axios.get('/api/users/search', {
      params: { username: searchUsername.value }
    });
    user.value = response.data;
    // 在搜索用户后，调用getUser函数以便获取完整用户信息
    getUser(response.data.id);
  } catch (error) {
    console.error('搜索用户失败:', error);
  }
};

const getUser = async (id) => {
  try {
    const response = await axios.get(`/api/users/${id}`);
    user.value = response.data;
    updateUserModel.value = { username: response.data.username, email: response.data.email }; // 更新更新用户信息表单
  } catch (error) {
    console.error('获取用户信息失败:', error);
  }
};

const updateUser = async () => {
  try {
    const response = await axios.put(`/api/users/${user.value.id}`, updateUserModel.value);
    user.value = response.data;
    updateUserModel.value = { username: '', email: '' }; // 清空表单
  } catch (error) {
    console.error('更新用户信息失败:', error);
  }
};
</script>
