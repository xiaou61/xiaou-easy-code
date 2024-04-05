<template>
  <div class="chat-container">
    <!-- 聊天消息展示区域 -->
    <div class="message-container" v-for="(message, index) in chatHistory" :key="index">
      <!-- 用户发送的消息 -->
      <div v-if="message.sender === 'user'" class="user-message">{{ message.content }}</div>
      <!-- ChatGPT 返回的消息 -->
      <div v-else class="gpt-message">{{ message.content }}</div>
    </div>
    <!-- 消息输入框 -->
    <div class="input-container">
      <input type="text" v-model="newMessage" @keyup.enter="sendMessage" placeholder="请输入消息...">
      <button @click="sendMessage">发送</button>
    </div>
  </div>
  <!-- 等待中动画 -->
  <div v-if="wait" class="wait">
    <div class="loader"></div>
    <div>等待中</div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import axios from 'axios';

// 创建 ref 响应式变量
const chatHistory = ref([]);
const newMessage = ref('');
const wait = ref(false);
// 发送消息的函数
const sendMessage = async () => {
  wait.value = true;
  const messageContent = newMessage.value.trim(); // 读取 newMessage 的值
  // 检查消息内容是否为空
  if (messageContent !== '') {
    // 将用户发送的消息添加到聊天历史记录中
    chatHistory.value.push({sender: 'user', content: messageContent}); // 修改 chatHistory 的值
    // 发送消息到后端，并获取返回的响应
    const response = await axios.get('http://localhost:8081/chat', {
      params: {
        message: messageContent
      }
    });
    wait.value = false;
    // 将 ChatGPT 返回的消息添加到聊天历史记录中
    chatHistory.value.push({sender: 'gpt', content: response.data}); // 修改 chatHistory 的值
    // 清空输入框
    newMessage.value = ''; // 修改 newMessage 的值
  }
};
</script>

<style scoped>
.chat-container {
  max-width: 500px;
  margin: auto;
  position: relative;
}

.message-container {
  margin-bottom: 10px;
}

.user-message {
  background-color: #aaf;
  padding: 5px;
  border-radius: 5px;
  max-width: 70%;
  word-wrap: break-word;
}

.gpt-message {
  background-color: #afa;
  padding: 5px;
  border-radius: 5px;
  max-width: 70%;
  word-wrap: break-word;
}

.input-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.input-container input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-container button {
  padding: 8px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.input-container button:hover {
  background-color: #45a049;
}

.wait {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 旋转类型的等待动画 */
.loader {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
