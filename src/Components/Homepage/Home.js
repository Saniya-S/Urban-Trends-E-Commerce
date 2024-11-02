import CategoriesBanner from "./CategoriesBanner";
import PromotionBanner from "./PromotionBanner";
import NewArrivals from "./NewArrivals";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthenticationContext";

const Home = () => {
    const {isAuthenticated, userId, setWishlist} = useContext(AuthContext);
    
    useEffect(() => {
        if (isAuthenticated){
            fetch('http://localhost:3001/wishlist', {
                method: 'POST',
                body: JSON.stringify({
                    userId:userId,
                    action: 'wishlist'
                })
            }).then(response => {
                if (!response.ok){
                    console.error('http error', response.status);
                }else{
                    return response.json();
                }
            }).then(data => {
                setWishlist(data);
            }).catch(error => {
                console.error('error in fechting list of wishlist', error);
            })
        } else{
            return;
        }
    }, [isAuthenticated, setWishlist, userId]);
    
    return(
        <div>
            <CategoriesBanner />
            <PromotionBanner />
            <NewArrivals />
        </div>
    )
}

export default Home;