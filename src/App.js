
import './App.css';
//react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Homepage/Home';
import Kids from './Components/Catogories/Kids/Kids';
import Women from './Components/Catogories/Women/women';
import Men from './Components/Catogories/Men/Men';
import Accessories from './Components/Catogories/Accessories/Accessories';
import CategoryView from './Components/Catogories/CategoryView';
import ProductView from './Components/ProductView';


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
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
