import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const SearchWrapper = styled.div<{ isActive: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  margin: ${({ isActive }) => (isActive ? '0 auto' : '1rem 0')};
  margin: 0 auto;

  & > * {
    margin-left: 1rem;
  }
`;

export const SearchInput = styled.input<{ isActive: boolean }>`
  height: 3rem;
  width: 100%;
  margin: auto;
  padding: 0.5rem;
  padding-left: 2.5rem;
  color: #1c1e21;
  border: #616161;
  border-bottom: 1px solid #616161;
  font-weight: 500;
  font-size: 1rem;
  overflow: hidden;
  outline: none;
  border-radius: ${({ isActive }) => isActive ? '10px 10px 0 0' : '26px'};
  &::placeholder {
    color: #616161;
    opacity: 0.8;
  }
  &:focus,
  &:hover {
    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.3);
  }
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 0;
  color: #616161;
  opacity: 0.8;
  cursor: pointer;
  @media (min-width: 768px) {
    right: 1.5rem;
  }
`;

export const AutoCompleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  background: #fff;
  border: #616161;
  border-radius: 0 0 10px 10px;
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

export const AutoCompleteItem = styled.button`
  padding: 0.5rem;
  border: none;
  background: none;
  line-height: 32px;
  text-align: left;
  &:hover {
    background-color: #eef2f3;
  }
`;
