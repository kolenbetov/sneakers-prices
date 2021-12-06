import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';
import SneakersSearchApp from './sneakers-search-app';
import SneakerDataContainer from './components/sneaker-data/sneaker-data';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path='/' element={<SneakersSearchApp />} />
        <Route path='/sneaker/:urlKey' element={<SneakerDataContainer />} />
      </Routes>
    </Router>
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
