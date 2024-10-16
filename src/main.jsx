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
import Register from './page/Register';
import Login from './page/Login';
import BookDetails from './page/BookDeatails';
import Wishlist from './page/Wishlist';

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
    },
    {
      path:"/wishlist",
      element:<Wishlist></Wishlist>
    },
    {
      path: "/book/:id",
      loader: ({params}) => fetch(`https://gutendex.com/books/?ids=${params.id}`),
      element:<BookDetails></BookDetails>,
    }
   
  
  ]
  },
  {
    path: '/signUp',
    element: <Register></Register>
  },
  {
    path: '/signIn',
    element:<Login></Login>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
