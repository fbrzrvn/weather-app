import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import {
  TemperatureIcon,
  TemperatureValue,
  TemperatureWrapper,
} from './styles';

type TemperatureProps = {
  icon: IconProp;
  value: number | string;
};

const Temperature: React.FC<TemperatureProps> = ({ icon, value }) => {
  return (
    <TemperatureWrapper temp={Number(value)}>
      <TemperatureIcon icon={icon} />
      <TemperatureValue>
        {value}
        <span>°C</span>
      </TemperatureValue>
    </TemperatureWrapper>
  );
};

export default Temperature;
