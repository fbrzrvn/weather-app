import AutoComplete from 'components/Input/AutoComplete';
import { cities } from 'constants/cities';
import React, { useState } from 'react';
import Search from './Search';

type InputProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const Input: React.FC<InputProps> = ({ searchValue, setSearchValue }) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 0) {
      setSuggestions(
        cities
          .filter((city) =>
            city.name.toLowerCase().includes(value.toLowerCase()),
          )
          .map((c) => c.name),
      );
    }
    setSearchValue(value);
  };

  const suggestionSelected = (suggestion: string) => {
    setSearchValue(suggestion);
    setSuggestions([]);
  };

  const hasSuggestions = suggestions.length > 0;

  return (
    <div>
      <Search
        searchValue={searchValue}
        onTextChange={onTextChange}
        hasSuggestions={hasSuggestions}
      />
      {searchValue && hasSuggestions && (
        <AutoComplete
          suggestions={suggestions}
          suggestionSelected={suggestionSelected}
        />
      )}
    </div>
  );
};

export default Input;
