import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Add from './Components/Add';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './Components/View';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Add/>}/>
        <Route path="/search" exact element={<View/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
