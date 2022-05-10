import axios from 'axios';
const firestoreTestApi = axios.create({
  baseURL: 'http://127.0.0.1:5001/dndinder-68dcc/us-central1',
});

export const postUserProfile = async (user_id) => {
  try {
    const { data } = await firestoreTestApi.post(`/addUser`, {
      user_id,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const updateUserProfile = async (postBody, user_id) => {
  const patchBody = { ...postBody };
  try {
    const { data } = await firestoreTestApi.patch(
      `/updateUser/${user_id}`,
      patchBody
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getCharacters = async () => {
  try {
    const { data } = await firestoreTestApi.get('/getCharacters');
    return data.characters;
  } catch (err) {
    console.log(err);
  }
};

export const getCharacterByID = async (character_id) => {
  try {
    const { data } = await firestoreTestApi.get(
      `/getCharacterByID/${character_id}`
    );
    return data.character;
  } catch (err) {
    console.log(err);
  }
};

export const getUserProfile = async (user_id) => {
  try {
    const { data } = await firestoreTestApi.get(`/getUser/${user_id}`);
    return data.user;
  } catch (err) {
    console.log(err);
  }
};

export const postCharacter = async (character) => {
  try {
    const { data } = await firestoreTestApi.post(`/addCharacter`, character);
    return data;
  } catch (err) {
    console.log(err);
  }
};
