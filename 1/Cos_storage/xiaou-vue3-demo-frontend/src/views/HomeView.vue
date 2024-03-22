<template>
  <div>
    <input type="file" @change="handleFileChange">
    <button @click="uploadFile">上传文件</button>
    <div v-if="uploadStatus">{{ uploadStatus }}</div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const file = ref(null);
const uploadStatus = ref('');

const handleFileChange = (event) => {
  file.value = event.target.files[0];
};

const uploadFile = async () => {
  if (!file.value) {
    uploadStatus.value = '请选择要上传的文件';
    return;
  }

  const formData = new FormData();
  formData.append('file', file.value);

  try {
    const response = await axios.post('http://localhost:8081/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    uploadStatus.value = response.data;
  } catch (error) {
    uploadStatus.value = '上传文件出错: ' + error.message;
  }
};
</script>
