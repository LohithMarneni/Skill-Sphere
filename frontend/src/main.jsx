import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './components/Home/Home.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';

export const server = "http://localhost:3000/api/";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'about', element: <AboutMe /> },
      { path: 'contactus', element: <ContactUs /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
      { path: '*', element: <h1>Not Found</h1> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
