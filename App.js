import React from 'react';
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Body from "./components/Body";
import CardDetails from './components/Card_Details';
import FormDetails from './components/Form_Details';
import ProductDetails from './components/Product_Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <FormDetails />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path=":id" element={<CardDetails />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
