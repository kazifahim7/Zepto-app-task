import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './MainlayOut/Mainlayout';
import Error from './Error/Error';
import Home from './page/Home';
import Contact from './page/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element: <Mainlayout></Mainlayout>,
    children:[{
      path: "/",
      element:<Home></Home>,
    },
    {
      path: '/contact',
      element:<Contact></Contact>
    }
  
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
