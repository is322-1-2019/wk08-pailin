export const getters = {
    latestMessage: state => {
      if (state.messages.length>0){
          return state.messages[state.messages.length-1]
      }
      return "No Message"
    }
  };