import React from 'react';
import ReactDOM from 'react-dom/client';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { Provider } from 'react-redux';
import store from "./store.js"
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PrivateRoute from './components/PrivateRoute';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import AdminRoute from './components/AdminRoute';
import OrderListScreen from './screens/admin/OrderListScreen';
import ProductListScreen from './screens/admin/ProductListScreen';
import ProductEditScreen from './screens/admin/ProductEditScreen';
import UserListScreen from './screens/admin/UserListScreen';
import UserEditScreen from './screens/admin/UserEditScreen';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<HomeScreen />
      },
      {
        path:"/search/:keyword",
        element:<HomeScreen />
      },
      {
        path:"/page/:pageNumber",
        element:<HomeScreen />
      },
      {
        path:"/search/:keyword/page/:pageNumber",
        element:<HomeScreen />
      },
      {
        path:"/product/:id",
        element:<ProductScreen />
      },
      {
        path:"/cart",
        element:<CartScreen />
      },
      {
        path:"/login",
        element:<LoginScreen />
      },
      {
        path:"/register",
        element:<RegisterScreen />
      },
      {
        path:"",
        element:<PrivateRoute />,
        children:[
          {
            path:"/shipping",
            element:<ShippingScreen />
          },
          {
            path:"/payment",
            element:<PaymentScreen />
          },
          {
            path:"/placeorder",
            element:<PlaceOrderScreen />
          },
          {
            path:"/order/:id",
            element:<OrderScreen />
          },
          {
            path:"/profile",
            element:<ProfileScreen />
          }
        ]
      },
      {
        path:"",
        element:<AdminRoute />,
        children:[
          {
            path:"/admin/orderlist",
            element:<OrderListScreen />
          },
          {
            path:"/admin/productlist",
            element:<ProductListScreen />
          },
          {
            path:"/admin/productlist/:pageNumber",
            element:<ProductListScreen />
          },
          {
            path:"/admin/product/:id/edit",
            element:<ProductEditScreen />
          },
          {
            path:"/admin/userlist",
            element:<UserListScreen />
          },
          {
            path:"/admin/user/:id/edit",
            element:<UserEditScreen />
          }
        ]
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
