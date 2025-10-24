import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/fireBase.config';
import { toast } from 'kitzo/react';
import { Eye ,EyeOff} from 'lucide-react';
const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const [error, setError] = useState(false);
  const [showpassword, setShowpassword] = useState(false)
  const Googleprovider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      setError('Password must be at least 6 characters long and include both uppercase and lowercase letters.');
      return;
    }

    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        updateProfile(result.user, { displayName, photoURL })
          .then(() => {
            navigate('/');
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, Googleprovider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate('/');
      })
      .catch((error) => {
        toast.error(error.message)
      });
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className="card bg-base-100 w-full max-w-sm  shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <h1 className="font-semibold text-2xl py-4 text-center">Register your account</h1>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" className="input" name="name" placeholder="Enter your Name" />
            <label className="label">Photo</label>
            <input type="text" className="input" name="photo" placeholder="Photo URL" />
            <label className="label">Email</label>
            <input type="email" className="input" name="email" placeholder="Email" />

            <div  className='relative mt-2'>
              <label className="label mb-1">Password</label>
            <input type={showpassword ? 'text' : 'password'} name="password" className="input" placeholder="Password" />
            <span onClick={() => setShowpassword(!showpassword)} className='absolute right-7 top-7'>
                {showpassword ? <Eye /> :<EyeOff /> }
            </span>
            </div>

            <button className="btn btn-neutral mt-4">Register</button>
            <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
              <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                  <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                  <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                  <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                </g>
              </svg>
              Login with Google
            </button>
            {error && <p className="text-red-600">{error}</p>}
            <p className="font-semibold pt-3 text-center">
              Already have an account?{' '}
              <Link to="/login" className="text-red-600">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
