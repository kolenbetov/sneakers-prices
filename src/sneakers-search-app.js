import React from 'react';
import SneakersSearchFormContainer from './components/sneakers-search-form/sneakers-search-form';
import SearchResultsContainer from './components/search-results/search-results';
import './App.css';

const SneakersSearchApp = () => {
  return (
    <div>
      <h2>CHECK SNEAKERS PRICES</h2>
      <SneakersSearchFormContainer />
      <SearchResultsContainer />
    </div>
  );
};

export default SneakersSearchApp;
