import logo from './logo.svg';
import './App.css';
import AppBar from './AppBar';
import AddProduct from './AddProduct';

import {Container } from '@mui/material'
import { Route, Routes } from "react-router-dom"
import ViewProduct from './ViewProduct';
import SearchProduct from './SearchProduct';


function App() {
  return (
    <div className="App">
    <AppBar/>
      <Container>

        <Routes>
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/" element={<ViewProduct />} />
          <Route path="/search" element={<SearchProduct />} />
        </Routes>
      </Container>
        
    </div>
  );
}

export default App;

