import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

const id = import.meta.env.VITE_CLIENT_ID
ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={id}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
)
