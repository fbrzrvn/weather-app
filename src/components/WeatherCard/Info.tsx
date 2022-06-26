import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { InfoTitle, InfoWrapper, InfoWrapperInner } from './styles';

type InfoProps = {
  name: string;
  value: number | string;
  icon?: IconProp;
};

const Info: React.FC<InfoProps> = ({ name, value, icon }) => {
  return (
    <InfoWrapper>
      <InfoTitle>{name}</InfoTitle>
      <InfoWrapperInner>
        {icon && <FontAwesomeIcon icon={icon} />}
        <p>{value}</p>
      </InfoWrapperInner>
    </InfoWrapper>
  );
};

export default Info;
