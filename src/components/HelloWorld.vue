<template>
  <h1>{{ msg }}</h1>
  <p>
    <button @click="handleClick">emit</button>
  </p>
  <div @click="$store.commit('setAge', 12)">我今年{{$store.state.age}}岁</div>
</template>

<script setup>
import { defineProps, reactive, defineEmits, useAttrs } from 'vue'
// 1. 定义props
defineProps({
  msg: String
})

// 2. 使用attrs接收props
const attrs = useAttrs()
console.log("attrs", attrs);

// defineEmits 定义父组件事件
const emit = defineEmits(['myLog'])
const handleClick = () => {
  emit("myLog", 1111)
}

// 发送请求
// fetch("/api/getUsers").then(res => res.json()).then(data => console.log("data", data);)

// 使用的是
const state = reactive({ count: 0 })

</script>