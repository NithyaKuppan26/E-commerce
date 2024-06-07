import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import ProductReducer from './ProductSlice';
import CartReducer, { getTotals } from './components/CartSlice';

const store=configureStore({
  reducer:{
products:ProductReducer,
cart:CartReducer
  }
})
store.dispatch(getTotals())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);