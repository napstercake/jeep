const commentsReducer = (state = {
    comments: ["this is the first comment", "this is the #2 comment", "this is #3 comment"]
  }, action) => {
    switch (action.type) {
      case 'ADD_COMMENT':
        state = {
          ...state,
          comments: state.comments.push("test")
        }
      break;
    }
    return state;
  }
export default commentsReducer;