import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
  const [message, setMessage] = useState('');
  const { signIn, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate('/');
        setMessage('✅ Login Successful!');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
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
