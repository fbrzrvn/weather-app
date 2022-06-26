import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { LoadingIcon, LoadingText } from './styles';

const Loading: React.FC = () => {
  return (
    <div className="wrapper">
      <LoadingIcon icon={faSpinner} title="load-icon" spin />
      <LoadingText>Loading data...</LoadingText>
    </div>
  );
};

export default Loading;
