import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import axios from 'axios'
import { configureStore} from '@reduxjs/toolkit'
import {Provider} from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducers from './reducers'
const store=configureStore({reducer:rootReducers,},composeWithDevTools());
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
