import React from 'react';
import { connect } from 'react-redux';
import { performSearch } from '../../actions/search-results-actions';

export const SneakersSearchFormContainer = ({ onPerformSearch }) => {
  let textInput = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    onPerformSearch(textInput.current.value);
  };

  return (
    <form className='sneaker-search-form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='ENTER NAME OR SKU'
        ref={textInput}
      ></input>
      <button type='submit'>SEARCH</button>
    </form>
  );
};

const mapActionsToProps = {
  onPerformSearch: performSearch
};

export default connect(null, mapActionsToProps)(SneakersSearchFormContainer);
