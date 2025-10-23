import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';

const DetailsProtectedRouter = ({ children }) => {
  const { user } = use(AuthContext);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default DetailsProtectedRouter;
