import axios from "axios";
const firestoreTestApi = axios.create({
  baseURL: "http://127.0.0.1:5001/dndinder-68dcc/us-central1",
});

export const postUserProfile = async (username) => {
  console.log(username);
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  try {
    const { data } = await firestoreTestApi.post(`/addUser`, {
      username,
    });
    console.log(data, "this is data");
    return data;
  } catch (err) {
    console.log(err);
  }
};

// export const postUserProfile = (user) => {
//   return fetch(`http://127.0.0.1:5001/dndinder-68dcc/us-central1/addUser`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ username: user.user }),
//   })
//     .then((res) => res.json())

//     .catch((error) => {
//       console.error(error);
//     });
// };
