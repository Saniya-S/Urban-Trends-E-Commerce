import { useState, createContext } from 'react';

const AuthContext = createContext();

// Current user context provider
const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accUsername, setAccUsername] = useState(null); 
    const [userId, setUserId] = useState(null);
    const [wishlist, setWishlist] = useState([]);
    const [cartList, setCartList] = useState([]);

 
const addToWishlist = (prodId) => {
    setWishlist((prevWishlist) => [...prevWishlist, { prod_id: prodId }]);
};

const removeFromWishlist = (prodId) => {
    setWishlist((prevWishlist) => prevWishlist.filter(item => item.prod_id !== prodId));
};

const addToCartList = (prodId) => {
    setCartList((prevCartList) => [...prevCartList, {prod_id: prodId}]);
}

const removeFromCartList = (prodId) => {
    setCartList((prevCartList) => prevCartList.filter((item) => item.prod_id !== prodId));
} 


    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, accUsername, setAccUsername, userId, setUserId, wishlist, setWishlist, addToWishlist, removeFromWishlist, cartList, setCartList, addToCartList, removeFromCartList }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };
