<template>
  <HelloWorld msg="home页面" @myLog="myLog"/>
  <compJSX />
  <my />
</template>

<script setup>
import HelloWorld from 'comps/HelloWorld.vue'
import compJSX from 'comps/compJSX.vue'
import my from 'comps/my.vue'

const myLog = (reg) => {
  console.log("reg", reg);
  console.log("myLogmyLog");
}
</script>

<style>
</style>
