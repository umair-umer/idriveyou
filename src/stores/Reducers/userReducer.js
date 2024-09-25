const init = {
  user: [],
  role: null,
};
const reducer = (state = init, action) => {
  // console.log('action user', action)

  switch (action.type) {
    case 'UPDATE_USER': {
      // console.log('action user', action.user)
      return {
        ...state,
        user: action.user,
      };
    }
    case 'USER_ROLE': {
      // console.log('action', action.res)
      return {
        ...state,
        role: action.res,
      };
    }

    case 'REMOVE_USER': {
      return {...state, user: null};
    }
    default: {
      return state;
    }
  }
};

export default reducer;
