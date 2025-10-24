import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../Provider/AuthProvider';
import { use, useRef } from 'react';
import { toast } from 'kitzo/react';

const Profile = () => {
  const { user } = use(AuthContext);

  const updateUserInfo = async (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;

    try {
      await updateProfile(user, { displayName, photoURL });
      toast.success('Profile info updated');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-10 p-6">
      <div className="bg-blue-400 rounded-3xl shadow-xl grid md:grid-cols-3 gap-8 p-8 text-white">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="size-32 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img src={user.photoURL} alt="ProfilePic" className="size-full object-cover" />
          </div>
          <h1 className="text-2xl font-bold mb-1">{user.displayName}</h1>
          <p className="text-gray-300">{user.email}</p>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-3xl font-semibold mb-4">My Profile</h2>
          <hr className=" mb-6" />

          <form onSubmit={updateUserInfo} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-200 mb-2">Name</label>
              <input defaultValue={user.displayName} type="text" name="name" placeholder="Enter your Name" className="input px-4 py-2 rounded-lg border text-black focus:outline  " />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-200 mb-2">Photo URL</label>
              <input defaultValue={user.photoURL} type="text" name="photo" placeholder="Photo URL" className="input px-4 py-2 rounded-lg border text-black focus:outline  " />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-200 mb-2">Email</label>
              <input readOnly defaultValue={user.email} type="email" name="email" placeholder="Email" className="input px-4 py-2 rounded-lg border text-black focus:outline  " />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-200 mb-2">Password</label>
              <input type="password" name="password" placeholder="Password" className="input px-4 py-2 rounded-lg border text-black focus:outline  " />
            </div>

            <div className="md:col-span-2 flex justify-end mt-4">
              <button type="submit" className="px-6 py-2 bg-blue-600 rounded-lg font-semibold transition-all">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
