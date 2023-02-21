import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const SearchInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="search-input"
      type="search"
      value={searchValue}
      onChange={handleChange}
      placeholder="Digite sua busca"
    />
  );
};

SearchInput.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchInput;
