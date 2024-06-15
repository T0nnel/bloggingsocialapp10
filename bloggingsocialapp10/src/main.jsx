import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './Pages/login/Login.jsx';
import Profile from './Pages/profile/Profile.jsx';
import Register from './Pages/register/Register.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/",
    element: <App/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)