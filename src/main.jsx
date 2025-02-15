import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthPovider from './providers/AuthPovider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthPovider>
    <RouterProvider router={router} />
    </AuthPovider>
  </React.StrictMode>,
)
