import Vue from "vue";

export const mutations = {
  setMassage(state, messages) {
      Vue.set(state, "messages", messages);
  },
  addMessage(state, message) {
    let messages = state.messages;
    messages.push(message);
    Vue.set(state, "messages", messages);
  }
};