import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("userToken") ? true : false
  );

  return (
    <div className="flex flex-col min-h-screen">  {/* Ensures full height */}
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      
      <div className="flex-grow"> {/* Pushes Footer to bottom */}
        <Outlet context={{ isAuthenticated, setIsAuthenticated }} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
