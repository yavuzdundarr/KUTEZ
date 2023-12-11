import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from './components/navbar';
import { Header } from './components/header';
import Products from './components/products.jsx';
import Imagecarousel from './components/imagecarousel';
import "./fonts/Avenir-Book.ttf";

function App() {
  return(
    <div className="App">
      <Router>
        <Navbar/>
        <Header />
        <Imagecarousel/>
        <Routes>
          <Route path="/"/>
          <Route path="/cart"/>
          <Route path="/search"/>
          <Route path="/products"/>
        </Routes>
      </Router>

    </div>
  )
}

export default App;
