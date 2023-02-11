import Sections from './pages/Sections';
import Header from './components/Header';
import Footer from './components/Footer';
import PhotoList from './pages/PhotoList';
import Photo from './pages/Photo';

import { Component, useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router';
import { Link } from "react-router-dom";


function App() {
  return (
    <>
    <Header />
    <main>
      <Routes>
          <Route path="/photo/:photoId" element={<Photo />} />
          <Route path="/photolist/:collectionId" element={<PhotoList />} />
          <Route path="/" element={<Sections />} />
      </Routes>
    </main>
    <Footer />
    </>

  );
}

export default App;
