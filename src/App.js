import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Profile from './Profile';
import Services from './Services';
import Navbar from './Navbar';
import PageNotFound from './PageNotFound';
function App() {
  return (
    <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/*" element={<PageNotFound/>}></Route>

    </Routes>
   </Router>
    </>
  );
}

export default App;
