import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import App from './App'
import './index.css'
import rootReducers from './reducers'
import { UserProvider } from './context'
const store=configureStore({reducer:rootReducers,},composeWithDevTools());
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <App />
      </UserProvider>
    </Provider>
  </React.StrictMode>
);
