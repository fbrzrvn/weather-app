import React from 'react';
import { AutoCompleteItem, AutoCompleteWrapper } from './styles';

type AutoCompleteProps = {
  suggestions: string[];
  suggestionSelected: (sug: string) => void;
};

const AutoComplete: React.FC<AutoCompleteProps> = ({
  suggestions,
  suggestionSelected,
}) => {
  return (
    <AutoCompleteWrapper>
      {suggestions.map((sug, i) => (
        <AutoCompleteItem key={i} onClick={() => suggestionSelected(sug)}>
          {sug}
        </AutoCompleteItem>
      ))}
    </AutoCompleteWrapper>
  );
};

export default AutoComplete;
