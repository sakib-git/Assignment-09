import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'kitzo/react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/fireBase.config';

const Login = () => {
  const Googleprovider = new GoogleAuthProvider();
  const [message, setMessage] = useState('');
  const { signIn, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    toast.promise(
      signIn(email, password),
      {
        loading: 'Logging in',
        success: (result) => {
          const user = result.user;
          setUser(user);
          navigate('/');
          return 'Successfully logged in';
        },
        error: (error) => {
          const errorMessage = error.message;
          toast.error(errorMessage);
          return error.message;
        },
      },
      { duration: 3000 }
    );
 
  };
  const handleGoogleLogin = (e) => {
      e.preventDefault();
  signInWithPopup(auth, Googleprovider)
    .then(result => {
      const user = result.user;
      setUser(user)
      navigate('/');
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
};


  return (
    <div className="flex justify-center items-center h-full">
      <div className="card bg-base-100 w-full max-w-sm  shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <h1 className="font-semibold text-2xl py-4 text-center">Login your account</h1>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" name="email" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
            {message && <p className="text-green-500 font-semibold">{message}</p>}
            <p className="font-semibold pt-3 text-center ">
              Dont't Have An Account ?{' '}
              <Link to="/register" className="text-red-600 ">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
