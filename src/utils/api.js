import axios from 'axios';
const firestoreTestApi = axios.create({
  baseURL: 'http://127.0.0.1:5001/dndinder-68dcc/us-central1',
});

export const postUserProfile = async (postBody) => {
  try {
    const { data } = await firestoreTestApi.post(`/addUser`, {
      postBody,
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

export const getGroupById = async (group_id) => {
  try {
    const { data } = await firestoreTestApi.get(`/getGroupById/${group_id}`);
    return data.group;
  } catch (err) {
    console.log(err);
  }
};

export const createGroup = async (group) => {
  console.log(group);
  try {
    const { data } = await firestoreTestApi.post(`/addGroup`, group);
    return data.group_id;
  } catch (err) {
    console.log(err);
  }
};

export const getCharactersFromGroup = async (characters) => {
  const charactersArray = [];

  Promise.all(
    characters.forEach(async (id) => {
      const character = await getCharacterByID(id);
      charactersArray.push(character);
    })
  );
  return charactersArray;
};

export const postCharacter = async (character) => {
  try {
    const { data } = await firestoreTestApi.post(`/addCharacter`, character);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const addCharacterToGroup = async (patchData) => {
  console.log(patchData);
  try {
    const { data } = await firestoreTestApi.patch(
      `/addCharacterToGroup`,
      patchData
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const removeCharacterFromGroup = async (patchData) => {
  try {
    const { data } = await firestoreTestApi.patch(
      `/removeCharacterFromGroup`,
      patchData
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getUsers = async () => {
  try {
    const { data } = await firestoreTestApi.get('/getUsers');
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const postMessage = async (message) => {
  try {
    const { data } = await firestoreTestApi.post('/addMessage', message);
    return data;
  } catch (err) {
    console.error(err);
  }
};
export const addUserToGroup = async (patchData) => {
  try {
    console.log(patchData);
    await firestoreTestApi.patch('/addUserToGroup', patchData);
  } catch (err) {
    console.log(err);
  }
};
