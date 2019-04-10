

export function githubUsers(state = {}, action) {
  switch (action.type) {
    case "FETCH_USERS":
      return action.payload;

    //   return {
    //     ...state,
    //     users: action.payload
    //   };

    default:
      return state;
  }
}
