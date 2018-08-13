import React from 'react';
import MagnifyingGlassIcon from '../icons/search.png';
import * as Style from '../containers/Employees/style';

export const Search = () => (
  <Style.Search>
    <Style.SearchIcon source={MagnifyingGlassIcon} />
    <Style.SearchBar
      placeholder="Search"
      autoCapitalize="words"
      autoCorrect={false}
    />
  </Style.Search>
);

export default Search;
