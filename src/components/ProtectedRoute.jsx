import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
  
  if (!isAdminLoggedIn) {
    // Redirect to login if not logged in
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute; 