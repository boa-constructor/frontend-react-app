import { useEffect, useState } from 'react';
import CreateGroup from './CreateGroup';
const Groups = () => {
  const [groups, setGroups] = useState();

  useEffect(() => {
    //space for getGroups function
  });
  return (
    <div>
      These are your current groups
      <br></br>
      <CreateGroup />
    </div>
  );
};

export default Groups;
