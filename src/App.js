
import './App.css';
//react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Homepage/Home';



function App() {
  return (
    <Router>
      <Routes>
          <Route path= '/' element={<Layout />}>
            <Route path='/' element={<Home />} />
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
