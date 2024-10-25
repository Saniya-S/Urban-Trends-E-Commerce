import CategoriesBanner from "./CategoriesBanner";
import PromotionBanner from "./PromotionBanner";
import NewArrivals from "./NewArrivals";


const Home = () => {
    return(
        <div>
            <CategoriesBanner />
            <PromotionBanner />
            <NewArrivals />
        </div>
    )
}

export default Home;