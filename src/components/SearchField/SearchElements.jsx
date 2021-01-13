import styled from 'styled-components';

export const SearchFieldContainer = styled.div`
  display: grid;
  margin-top: 70px;
  grid-template-columns:
    minmax(70%, 0.4fr) minmax(auto, auto)
    minmax(20%, 0.3fr);
  width: 100%;

  @media screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: .6fr .1fr .3fr;
  }
`;

export const SearchInput = styled.input`
  grid-column: 1;
  background-color: #e6e7ee;
  border: 1px solid #d1d9e6;
  border-radius: 5px;
  padding: 15px;
  align-self: center;
  justify-self: center;
  width: 95%;
  -webkit-box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
  box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
  background: linear-gradient(
    180,
    rgba(0, 0, 0, 0.22),
    rgba(255,255,255, 0.25)
  );

  &:hover,
  :focus {
    -webkit-box-shadow: inset 3px 3px 6px #b8b9be, inset -3px -3px 6px #fff;
    box-shadow: inset 3px 3px 6px #b8b9be, inset -3px -3px 6px #fff;
  }

  @media screen and (max-width: 480px) {
    grid-column: 1;
  }
`;

export const Sort = styled.select`
  align-self: center;
  grid-column: 3;
  height: 100%;
  -webkit-box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
  box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;

  @media screen and (max-width: 480px) {
    grid-column: 3;
  }
`;

export const Option = styled.option`
  font-weight: bold;
`;
