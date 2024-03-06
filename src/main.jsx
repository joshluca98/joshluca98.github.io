import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router.jsx';
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'

import { RouterProvider } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
