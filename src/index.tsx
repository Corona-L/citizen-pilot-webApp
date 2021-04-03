import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider as StoreProvider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { reducers } from './store/index';

const middleware = applyMiddleware(ReduxThunk);
const store = createStore(reducers, middleware);

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
