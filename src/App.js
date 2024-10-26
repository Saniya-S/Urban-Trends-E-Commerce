
import './App.css';
//react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Homepage/Home';
import Kids from './Components/Catogories/Kids/Kids';



function App() {
  return (
    <Router>
      <Routes>
          <Route path= '/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/kids' element={<Kids />} />
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
