export const actions = {
    getMessage() {
    },
    addMessage(context, message){
      context.commit("addMessage", message);
    },
  };