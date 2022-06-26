import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { ErrorIcon, ErrorText } from './styles';

type ErrorMsgProps = {
  icon: IconProp;
  errorMsg: string;
};

const ErrorMsg: React.FC<ErrorMsgProps> = ({ errorMsg, icon }) => {
  return (
    <div className="wrapper">
      <ErrorIcon icon={icon} title="error-icon" />
      <ErrorText>{errorMsg}</ErrorText>
    </div>
  );
};

export default ErrorMsg;
