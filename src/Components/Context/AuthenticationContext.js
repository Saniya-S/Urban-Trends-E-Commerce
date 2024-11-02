import { useState, createContext } from 'react';

const AuthContext = createContext();

// Current user context provider
const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accUsername, setAccUsername] = useState(null); 
    const [userId, setUserId] = useState(null);
    const [wishlist, setWishlist] = useState([]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, accUsername, setAccUsername, userId, setUserId, wishlist, setWishlist }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };
