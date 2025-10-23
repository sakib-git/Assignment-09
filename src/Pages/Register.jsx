import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const { createUser, setUser } = use(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        updateProfile(result.user, { displayName, photoURL })
          .then(() => {
            navigate('/');
          })
          .catch((error) => {
            console.error(error.message);
          });
      })
      .catch((error) => {
        console.error(error.message);
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
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
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
