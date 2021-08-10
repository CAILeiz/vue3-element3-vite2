<template></template>

<script lang="jsx">
import { ref } from "vue";

export default {
  // 1. jsx setup实战
  // setup() should not return VNodes directly - return a render function instead
  setup() {
    const name = ref("周磊")
    const onclick = () => {
      name.value = "君君"
    }
    return () => (
      <>
        <div onClick={onclick}>{name.value}</div>
      </>
    );
  },

  // // 2. 使用render
  // data() {
  //   return {
  //     name: "周磊"
  //   }
  // },
  // render() {
  //   return (
  //     <>
  //       <p>comp</p>
  //       <div onClick={this.onclick}>{this.name}</div>
  //     </>
  //   )
  // },
  // methods: {
  //   onclick() {
  //     this.name = "君君"
  //   }
  // }
};
</script>