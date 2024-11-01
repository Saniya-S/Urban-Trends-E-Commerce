import { useState, createContext } from 'react';

const AuthContext = createContext();

// Current user context provider
const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accUsername, setAccUsername] = useState(null); 

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, accUsername, setAccUsername }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };
