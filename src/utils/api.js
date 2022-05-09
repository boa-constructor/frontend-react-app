import axios from 'axios';
const firestoreTestApi = axios.create({
  baseURL: 'http://127.0.0.1:5001/dndinder-68dcc/us-central1',
});

export const postUserProfile = async (
  username,
  avatar_url,
  years_played,
  about_me,
  Online,
  Face_to_face,
  is_dm
) => {
  console.log(username);
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
  try {
    const { data } = await firestoreTestApi.post(`/addUser`, {
      username,
      avatar_url,
      years_played,
      about_me,
      Online,
      Face_to_face,
      is_dm,
    });
    console.log(data, 'this is data');
    return data;
  } catch (err) {
    console.log(err);
  }
};
