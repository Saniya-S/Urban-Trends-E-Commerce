
import './App.css';
//react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout.js';
import Home from './Components/Homepage/Home.js';
import Kids from './Components/Catogories/Kids/Kids.js';
import Women from './Components/Catogories/Women/women.js';
import Men from './Components/Catogories/Men/Men.js';
import Accessories from './Components/Catogories/Accessories/Accessories.js';
import CategoryView from './Components/Catogories/CategoryView.js';
import ProductView from './Components/ProductView.js';
import Signup from './Components/Signup/Signup.js';
import Login from './Components/Signup/Login.js';
import WishList from './Components/Wishlist/Wishlist.js';
import Cart from './Components/Cart/Cart.js';
import Result from './Components/Search/Result.js';


function App() {
  return (
    <Router>
      <Routes>
          <Route path= '/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/kids' element={<Kids />} />
            <Route path='/women' element={<Women />} />
            <Route path='/men' element={<Men />} />
            <Route path='/accessories' element={<Accessories />} />
            <Route path='/:category/:subCategory' element={<CategoryView />} />
            <Route path='/:category/:id/:productName' element={<ProductView />} />
            <Route path='/sign-up' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/:searchQuery' element={<Result />} />
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
