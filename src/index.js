import React, { lazy ,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Body from './components/Body';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
import Cart from './components/Cart';



const  Instamart = lazy(()=>import('./components/Instamart'));

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:resid",
        element:<RestaurantMenu/>
      },
      {
        path:"/instamart",
        element:<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
    ]
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router = {appRouter}>
    <App />
  </RouterProvider>
);


reportWebVitals();
