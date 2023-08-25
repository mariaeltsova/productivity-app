import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router basename={import.meta.env.DEV ? '/' : '/productivity-app/'}>
    <App />
  </Router>
)


