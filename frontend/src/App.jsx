import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("userToken") ? true : false
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      
      <div className="flex-grow">
        <Outlet context={{ isAuthenticated, setIsAuthenticated }} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
