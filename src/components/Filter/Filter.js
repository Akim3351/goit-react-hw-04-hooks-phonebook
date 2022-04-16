import React from 'react';
import propTypes from 'prop-types';
import { SearchLabel, SearchInput } from './Filter.styled';

const Filter = ({ filter, onSearch }) => {
  return (
    <SearchLabel>
      Find contacts by name
      <SearchInput onChange={onSearch} type="text" value={filter} />
    </SearchLabel>
  );
};

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  onSearch: propTypes.func.isRequired,
};

export default Filter;
