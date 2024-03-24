<template>
  <slide-verify ref="slideblock" @again="onAgain" @fulfilled="onFulfilled" @success="onSuccess" @fail="onFail" @refresh="onRefresh" :slider-text="text" :accuracy="accuracy"></slide-verify>
  <button @click="handleClick">在父组件可以点我刷新哦</button>
  <div>{{msg}}</div>
</template>

<script setup>
import { ref } from 'vue';

const msg = ref('');
const text = '向右滑动->';
const accuracy = 1;
const slideblock = ref(null); // 创建 slideblock 变量

const onSuccess = (times) => {
  console.log('验证通过，耗时 ' + times + '毫秒');
  msg.value = `login success, 耗时${(times / 1000).toFixed(1)}s`;
};

const onFail = () => {
  console.log('验证不通过');
  msg.value = '';
};

const onRefresh = () => {
  console.log('点击了刷新小图标');
  msg.value = '';
};

const onFulfilled = () => {
  console.log('刷新成功啦！');
};

const onAgain = () => {
  console.log('检测到非人为操作的哦！');
  msg.value = 'try again';
  // 刷新
  slideblock.value.reset();
};

const handleClick = () => {
  slideblock.value.reset();
};


</script>
