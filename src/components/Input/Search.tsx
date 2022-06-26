import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { SearchIcon, SearchInput, SearchWrapper } from './styles';

type SearchProps = {
  searchValue: string;
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasSuggestions: boolean;
};

const Search: React.FC<SearchProps> = ({
  searchValue,
  onTextChange,
  hasSuggestions,
}) => {
  return (
    <SearchWrapper isActive={hasSuggestions}>
      <SearchInput
        type="search"
        placeholder="Search"
        value={searchValue}
        onChange={onTextChange}
        isActive={hasSuggestions}
      />
      <SearchIcon icon={faSearch} />
    </SearchWrapper>
  );
};

export default Search;
