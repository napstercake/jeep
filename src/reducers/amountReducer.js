const amountReducer = (state = {
    amount: 0  
  }, action) => {
    switch (action.type) {
      case "ADD_AMOUNT":
        state = {
          ...state,
          amount: state.amount + action.payload
        }
        break;
    }
    return state;
  }
export default amountReducer 