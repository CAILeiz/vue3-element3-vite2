import { createStore } from "vuex";

export default createStore({
  state: {
    age: 10,
  },
  mutations: {
    setAge(state, plyload) {
      console.log("plyload", plyload);
      state.age = plyload || state.age + 1;
    },
  },
});
