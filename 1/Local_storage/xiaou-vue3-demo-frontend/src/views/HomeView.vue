<template>
  <div>
    <input type="file" @change="handleFileChange">
    <button @click="uploadImage">上传图片</button>
    <img :src="getImageUrl()" v-if="imageUrl">
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const file = ref(null);
const imageUrl = ref(null);

const handleFileChange = (event) => {
  file.value = event.target.files[0];
};

const uploadImage = async () => {
  const formData = new FormData();
  formData.append('image', file.value);

  try {
    const response = await axios.post('http://localhost:8081/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    imageUrl.value = response.data;
  } catch (error) {
    console.error('Error uploading image: ', error);
  }
};

const getImageUrl = () => {
  if (imageUrl.value) {
    // 拼接后端服务器地址和图片地址
    return `http://localhost:8081${imageUrl.value}`;
  }
};
</script>
