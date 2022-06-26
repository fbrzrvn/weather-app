import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const borderRadius = '10px';

export const WeatherArticle = styled.article`
  position: relative;
  min-width: 100%;
  margin: auto;
  border-radius: ${borderRadius};
  background-color: #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.12);
`;
export const WeatherTitle = styled.h2`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-weight: 300;
  font-size: 2rem;
`;
export const WeatherHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  background: #f5f5f5;
  border-radius: ${borderRadius} ${borderRadius} 0 0;
  border-bottom: 1px solid #e0e0e0;
`;
export const WeatherHeaderInner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5rem 1rem 0;
`;
export const WeatherDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  white-space: nowrap;
`;

/* *****************
 * TEMPERATURE
 **************** **/
export const TemperatureWrapper = styled.div<{ temp: number }>`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${({ temp }) =>
    temp <= 10 ? '#2F80ED' : temp > 29 ? '#ff6a00' : '#616161'};
`;
export const TemperatureIcon = styled(FontAwesomeIcon)`
  height: 2rem;
  color: inherit;
`;

export const TemperatureValue = styled.h3`
  margin-left: 0.5rem;
  font-weight: 400;
  font-size: 4rem;
  text-align: right;
  white-space: nowrap;
  color: inherit;
  & span {
    font-size: 2rem;
    vertical-align: super;
  }
`;

/* *****************
 * INFO
 **************** **/
export const WeatherInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;
export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  &:not(:last-of-type) {
    border-bottom: 1px solid #e0e0e0;
  }
`;
export const InfoTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.2px;
`;
export const InfoWrapperInner = styled.div`
  display: flex;
  align-items: center;
  & p {
    margin-left: 0.5rem;
    font-size: 1rem;
  }
`;
