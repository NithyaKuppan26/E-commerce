// SearchResults.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SearchItem from './SearchItem';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const products = useSelector((state) => state.products);
  const query = useQuery();
  const search = query.get('query') || '';

  const searchFilter = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Search Results</h2>
      {searchFilter.map((searchItem) => (
        <SearchItem key={searchItem.id} searchItem={searchItem} />
      ))}
    </div>
  );
};

export default SearchResults;
