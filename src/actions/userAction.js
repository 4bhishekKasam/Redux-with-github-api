import axios from "axios";

export function searchUser(userName) {
  console.log("----" + userName);

  let url = "https://api.github.com/search/users?q=" + userName;

  return dispatch => {
    axios
      .get(url)
      //   .then(res => res.json())
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => dispatch(fetchGithubUsers(response.data)));
  };
}

export function fetchGithubUsers(items) {
  return {
    type: "FETCH_USERS",
    payload: items
  };
}
