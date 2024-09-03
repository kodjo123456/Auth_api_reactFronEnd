import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Registration from './Pages/Authentication/Registration.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import OtpCode from './Pages/OtpCode/OtpCode.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },

  {
    path: "/otp-code/:email",
    element: <OtpCode />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
