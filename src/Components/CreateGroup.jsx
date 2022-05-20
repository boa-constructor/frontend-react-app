import { useState } from 'react';
import { createGroup, addUserToGroup } from '../utils/api';
import { useAuth } from '../contexts/authContext';

const CreateGroup = ({ newGroup, setNewGroup }) => {
  const { currentUser } = useAuth();
  const [inputGroup, setInputGroup] = useState({ user_id: currentUser.uid });
  const submissionHandler = (e) => {
    e.preventDefault();
    createGroup(inputGroup).then((group_id) => {
      setNewGroup({ ...inputGroup, group_id, user_id: currentUser.uid });
      addUserToGroup({ user_id: currentUser.uid, group_id: group_id });
    });
  };
  return (
<div class="lg:w-1/2 xl:w-5/12 px-4 mx-auto md:w-1/2 sm:w-3/4" data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000">
    <div class="bg-gray-100 dark:bg-slate-800 relative rounded-lg p-8 sm:p-12 shadow-lg">
    <form onSubmit={submissionHandler}>
        <div class="mb-6">
            <input
            required
                type='text'
                placeholder='Group Name'
                value={inputGroup.group_name}
                name='group_name'
                onChange={(e) =>
                  setInputGroup((currInputGroup) => {
                    return { ...currInputGroup, group_name: e.target.value };
                  })
                }
                class="
                w-full
                rounded
                p-3
                text-gray-800
                dark:text-gray-50
                dark:bg-slate-700
                border-gray-500
                dark:border-slate-600
                outline-none
                focus-visible:shadow-none
                focus:border-primary
                "
                />
        </div>
        <div class="mb-6">
            <input
                placeholder="Group avatar"
                class="
                w-full
                rounded
                p-3
                text-gray-800
                dark:text-gray-50
                dark:bg-slate-700
                border-gray-500
                dark:border-slate-600
                outline-none
                focus-visible:shadow-none
                focus:border-primary
                "
                name='group_avatar'
                type='url'
                value={inputGroup.avatar}
                onChange={(e) =>
                  setInputGroup((currInputGroup) => {
                    return { ...currInputGroup, avatar: e.target.value };
                  })
                }
                required
                />
        </div>
        <div class="mb-6">
            <textarea
                rows="6"
                placeholder="About Group"
                class="
                w-full
                rounded
                p-3
                text-gray-800
                dark:text-gray-50
                dark:bg-slate-700
                border-gray-500
                dark:border-slate-600
                outline-none
                focus-visible:shadow-none
                focus:border-primary
                "
                required
                value={inputGroup.game_info}
                name='game_info'
                type='textarea'
                onChange={(e) =>
                  setInputGroup((currInputGroup) => {
                    return { ...currInputGroup, game_info: e.target.value };
                  })
                }
            
                ></textarea>
        </div>
        <div className="mb-4 md:flex md:justify-around dark:text-gray-50" value={inputGroup.game_type}
        onChange={(e) =>
          setInputGroup((currInputGroup) => {
            return { ...currInputGroup, game_type: e.target.value };
          })
        }>
        <label htmlFor='game_type' class="dark:text-gray-50">Game type:</label>
        Online
        <input type='radio' name='game_type' value='Online' required />
        Offline
        <input type='radio' name='game_type' value='Offline' required />
        </div>
        <div>
            <button
                type="submit"
                class="
                w-full
                text-gray-100
                hover:text-gray-700
                bg-yellow-400
                rounded
                border border-primary
                dark:border-slate-600
                p-3
                transition
                ease-in-out
                duration-500
                hover:bg-yellow-300
                "
                >
            Create Group
            </button>
        </div>
    </form>
    </div>
    </div>
    );
  };

export default CreateGroup;
