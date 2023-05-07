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

const PUBLIC_API="http://localhost:10000/api"
//Default setting
let auth=JSON.parse(window.localStorage.getItem("auth"))
axios.defaults.baseURL=PUBLIC_API;
axios.defaults.headers.common["Authorization"]=`Bearer ${auth?.token}`;
console.log("token",auth?.token);
//When Token Expire Logout automatically
axios.interceptors.response.use(
function (response){
return response;
},
function(Error){
let res=Error.response;
if(res.status===401&& res.config && !res.config._isRetryREquest){
    window.localStorage.removeItem("auth");
    window.location.href="/login"
}
}
);
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
