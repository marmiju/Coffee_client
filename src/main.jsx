import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/HOme/HOme.jsx';
import Cproduct from './Components/Cproduct/Cproduct.jsx';
import Error from './Components/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
    children :[
      {
        path:"/",
        element: <Home></Home>,
        loader : ()=>fetch('http://localhost:5000/coffee')
      },
      {
        path:"/addnew",
        element:<Cproduct></Cproduct>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
