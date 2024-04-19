
import React, { createContext, useContext, ReactNode } from 'react';

interface ApiContextProps {
  children: ReactNode;
}

interface ApiUrls {
  adminSignup: string;
 
}


const ApiContext = createContext<ApiUrls | undefined>(undefined);

export const ApiProvider: React.FC<ApiContextProps> = ({ children }) => {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const adminSignupEndpoint = process.env.REACT_APP_ADMIN_SIGNUP_ENDPOINT;

  if (!apiBaseUrl || !adminSignupEndpoint) {
    throw new Error('API base URL or endpoint is not defined in the environment variables');
  }

  const apiUrls: ApiUrls = {
    adminSignup: apiBaseUrl + adminSignupEndpoint,
    // Add more API endpoints here
  };

  return (
    <ApiContext.Provider value={apiUrls}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};
