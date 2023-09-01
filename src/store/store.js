import { createStore } from 'vuex';

// Define your store
const store = createStore({
  state: {
    // Define your state properties here
    count: 0,
  },
  mutations: {
    // Define your mutations here to update state
    increment(state) {
      state.count++;
    },
  },
  actions: {
    // Define your actions here
    async incrementAsync({ commit }) {
      // Simulate an async operation, e.g., an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      commit('increment');
    },
  },
  getters: {
    // Define your getters here to access state
    getCount(state) {
      return state.count;
    },
  },
});

export default store;
