import Navbar from './Components/Navbar/Navbar';
import './App.css';
//react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
