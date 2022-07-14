import './App.css';
import Header from './component/Header';
import {Route, Routes} from 'react-router-dom';
import React from 'react';
import Home from './component/Home';
import AddBook from './component/AddBook';
import Books from './component/Book/Books';
import AboutUs from './component/AboutUs';

function App() {
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path='/home' element={<Home/>} exact/>
          <Route path='/add' element={<AddBook/>} exact/>
          <Route path='/books' element={<Books/>} exact/>
          <Route path='/about' element={<AboutUs/>} exact/>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
