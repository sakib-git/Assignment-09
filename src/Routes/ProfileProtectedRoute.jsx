import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';

const ProfileProtectedRoute = ({ children }) => {
  const { user } = use(AuthContext);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProfileProtectedRoute;
