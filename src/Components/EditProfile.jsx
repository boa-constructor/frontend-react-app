import { useEffect, useState } from 'react';
import { updateUserProfile } from '../utils/api';
import { getUserProfile } from '../utils/api';
import { useAuth } from '../contexts/authContext';
import { postUserProfile } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const SetProfile = ({ userName, setInputs }) => {
  const { currentUser } = useAuth();
  postUserProfile({ user_id: currentUser.uid });
  const navigate = useNavigate();
  const [userObj, setUserObj] = useState({});

  useEffect(() => {
    getUserProfile(currentUser.uid)
      .then((data) => {
        setUserObj((currUserObj) => {
          return { ...currUserObj, ...data };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentUser]);

  const submissionHandler = async (e) => {
    e.preventDefault();
    await updateUserProfile(userObj, `${currentUser.uid}`);
    navigate('/Profile');
  };

  return (
    <div className="min-h-screen font-mono bg-gray-400">
      {/* <!-- Container --> */}
      <div className="container mx-auto">
        <div className="flex justify-center px-6 ">
          {/* <!-- Row --> */}
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            {/* <!-- Col --> */}
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage: `url(
                  'https://www.worldanvil.com/media/cache/cover/uploads/images/ae1dcfb1dc06c257155690eda6289c51.jpg'
                )`,
              }}
            ></div>
            {/* <!-- Col --> */}

            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Edit your profile!</h3>
              <form
                onSubmit={(e) => submissionHandler(e)}
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
              >
                <div className="mb-4 md:flex md:justify-center">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      value={userObj.username}
                      name="username"
                      type="text"
                      onChange={(e) =>
                        setUserObj((currUserObj) => {
                          return { ...currUserObj, username: e.target.value };
                        })
                      }
                      placeholder="First Name"
                    ></input>
                  </div>

                  <div className="mb-4 md:mr-2 md:mb-0" htmlFor="avatar_url">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Enter Avatar URL:
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      value={userObj.avatar_url}
                      type="url"
                      name="avatar_url"
                      onChange={(e) =>
                        setUserObj((currUserObj) => {
                          return {
                            ...currUserObj,
                            avatar_url: e.target.value,
                          };
                        })
                      }
                    ></input>
                  </div>
                </div>
                <div className="mb-4 md:flex md:justify-around">
                  <div>
                    <label htmlFor="GameType">Online</label>

                    <input
                      value={userObj.play_online}
                      checked={userObj.play_online}
                      type="checkbox"
                      id="play_online"
                      name="play_online"
                      onChange={(e) =>
                        setUserObj((currUserObj) => {
                          return {
                            ...currUserObj,
                            play_online: e.target.checked,
                          };
                        })
                      }
                    ></input>
                  </div>

                  <div>
                    <label htmlFor="GameType">Offline</label>

                    <input
                      value={userObj.play_offline}
                      checked={userObj.play_offline}
                      type="checkbox"
                      id="play_offline"
                      name="play_offline"
                      onChange={(e) =>
                        setUserObj((currUserObj) => {
                          return {
                            ...currUserObj,
                            play_offline: e.target.checked,
                          };
                        })
                      }
                    ></input>
                  </div>

                  <div>
                    <label className="switch">
                      Do you DM?
                      <input
                        value={userObj.is_dm}
                        type="checkbox"
                        onChange={(e) =>
                          setUserObj((currUserObj) => {
                            return { ...currUserObj, is_dm: e.target.checked };
                          })
                        }
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <h3 className="block mb-2 text-sm font-bold text-gray-700">
                      About
                    </h3>
                    <p>
                      Please enter a short description about you and what you
                      are looking for.
                    </p>
                    <textarea
                      className="w-full h-32  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      rows="4"
                      cols="50"
                      value={userObj.about_me}
                      onChange={(e) =>
                        setUserObj((currUserObj) => {
                          return { ...currUserObj, about_me: e.target.value };
                        })
                      }
                    ></textarea>
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-2 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Update Profile
                  </button>
                </div>
                <hr className="mb-6 border-t" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetProfile;

// {/* <div>
//   <h1>Welcome to your profile {userName}</h1>
//   <form onSubmit={(e) => submissionHandler(e)}>

//     <fieldset>
//       <legend>
//         <h3>Online or Face to face games?</h3>
//       </legend>
//       <div>
//         <label htmlFor='GameType'>Online</label>

//         <input
//           value={userObj.play_online}
//           checked={userObj.play_online}
//           type='checkbox'
//           id='play_online'
//           name='play_online'
//           onChange={(e) =>
//             setUserObj((currUserObj) => {
//               return { ...currUserObj, play_online: e.target.checked };
//             })
//           }
//         ></input>
//       </div>
//       <div>
//         <label htmlFor='GameType'>Offline</label>
//         <input
//           value={userObj.play_offline}
//           checked={userObj.play_offline}
//           type='checkbox'
//           id='play_offline'
//           name='play_offline'
//           onChange={(e) =>
//             setUserObj((currUserObj) => {
//               return { ...currUserObj, play_offline: e.target.checked };
//             })
//           }
//         ></input>
//       </div>
//     </fieldset>
//     <fieldset>
//       <h3> About</h3>
//       <p>
//         Please enter a short description about you and what you are looking
//         for.
//       </p>
//       <textarea
//         classNameName='about_me_text'
//         rows='4'
//         cols='50'
//         value={userObj.about_me}
//         onChange={(e) =>
//           setUserObj((currUserObj) => {
//             return { ...currUserObj, about_me: e.target.value };
//           })
//         }
//       ></textarea>

//       <label>
//         Enter your avatar URL:
//         <input
//           value={userObj.avatar_url}
//           type='url'
//           name='avatar_url'
//           onChange={(e) =>
//             setUserObj((currUserObj) => {
//               return { ...currUserObj, avatar_url: e.target.value };
//             })
//           }
//         />
//       </label>
//       <p>
//         <label htmlFor='years_played'>
//           Number of years played (Rounded up):
//         </label>
//         <input
//           value={userObj.years_played}
//           type='number'
//           id='quantity'
//           name='years'
//           min='1'
//           max='100'
//           onChange={(e) =>
//             setUserObj((currUserObj) => {
//               return { ...currUserObj, years_played: e.target.value };
//             })
//           }
//         />
//         <label classNameName='switch'>
//           Do you DM?
//           <input
//             value={userObj.is_dm}
//             type='checkbox'
//             onChange={(e) =>
//               setUserObj((currUserObj) => {
//                 return { ...currUserObj, is_dm: e.target.checked };
//               })
//             }
//           />
//           <span classNameName='slider round'></span>
//         </label>
//       </p>
//     </fieldset>
//     <fieldset>
//       <button type='submit'>Update Profile</button>
//     </fieldset>
//   </form>
// </div>
