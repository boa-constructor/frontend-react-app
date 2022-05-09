import axios from "axios";
const firestoreTestApi = axios.create({
  baseURL: "http://127.0.0.1:5001/dndinder-68dcc/us-central1",
});

export const postUserProfile = async (username) => {
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
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getCharList = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  try {
    const { data } = await firestoreTestApi.get("/getCharacters");
    console.log(data);
    return data.characters;
  } catch (err) {
    console.log(err);
  }
};
