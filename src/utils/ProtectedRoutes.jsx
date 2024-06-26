import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes() {
  const isAuthenticated = useSelector(state => state.isAuthenticated);

  return (
    isAuthenticated ? <Outlet /> : <Navigate to='/Ownerlogin/' />
  );
}

export default ProtectedRoutes;
