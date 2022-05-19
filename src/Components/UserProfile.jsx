import { useState, useEffect } from 'react';
import { getUserProfile } from '../utils/api';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { HiCheck, HiX } from 'react-icons/hi';

const UserProfile = () => {
  const [charListExists, setCharListExists] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const { currentUser } = useAuth();

  useEffect(() => {
    getUserProfile(currentUser.uid)
      .then((data) => {
        setUserProfile(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentUser, charListExists]);

  console.log(userProfile);

  return (
    <div className="pt-16 bg-blueGray-50">
      <div className="w-full lg:w-4/12 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <img
                  src={userProfile.avatar_url}
                  alt="avatar"
                  className="relative shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
              <div className="w-full px-4 text-center mt-20">
                <div className="flex justify-center gap-2 py-4 lg:pt-4 pt-8">
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      {userProfile.is_dm ? (
                        <HiCheck size={30} />
                      ) : (
                        <HiX size={30} />
                      )}
                    </span>
                    <span className="text-sm text-blueGray-400">DM</span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span>
                      {userProfile.play_online ? (
                        <HiCheck className="ml-4" size={30} />
                      ) : (
                        <HiX size={30} />
                      )}
                    </span>
                    <span className="text-sm text-blueGray-400">
                      Play Online
                    </span>
                  </div>
                  <div className="lg:mr-4 p-3 text-center">
                    <span>
                      {userProfile.play_offline ? (
                        <HiCheck className="ml-4" size={30} />
                      ) : (
                        <HiX size={30} />
                      )}
                    </span>
                    <span className="text-sm text-blueGray-400">
                      Play Offline
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h2 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                Welcome to your profile,
              </h2>
              <h1 className=" leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                {userProfile.username}
              </h1>
              <div className="mb-2 text-blueGray-600 mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                Number of years played:{' '}
                <span className="font-bold text-lg ml-2">
                  {userProfile.years_played}
                </span>
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    {userProfile.about_me}
                  </p>
                  {/* className="no-underline text-gray-300" */}
                  <Link to="/EditProfile">
                    {' '}
                    <button className="text-gray-100 hover:text-black bg-gradient-to-r from-pink-300 w-40 bg-red-500 p-2 px-3 text-lg  hover:bg-red-600 duration-300 hover:scale-110 rounded-md">
                      Edit Profile
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
