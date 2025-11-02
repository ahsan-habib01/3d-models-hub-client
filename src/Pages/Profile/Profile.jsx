import { use } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Profile = () => {
  const { user } = use(AuthContext);
  console.log(user);

  return (
    <div className="mt-5">
      <div className="text-center">
        <h2 className=" font-bold text-2xl">{user.displayName}</h2>
        <p>{user.email}</p>
        <img className='mx-auto mt-5 h-50 w-50 rounded-full object-cover' src={user.photoURL} alt="" />
      </div>
    </div>
  );
};

export default Profile;
