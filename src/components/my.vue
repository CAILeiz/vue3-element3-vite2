<template>
  <div>我是my组件</div>
  <el-button @click="show = !show">Click Me</el-button>
  <el-input :value="value.value"></el-input> 
</template>

<script setup>
import { ref } from "vue";
const value = ref(1111)

</script>

<style>

</style>