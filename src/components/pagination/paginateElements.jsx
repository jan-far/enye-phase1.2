import styled, { css } from 'styled-components';

const neumorphic = css`
  -webkit-box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
  box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
  background: linear-gradient(
      -45deg,
      rgba(0, 0, 0, 0.6),
      rgba(255, 255, 255, 0.1)
    ),
    linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.7));
`;

export const PaginateContainer = styled.nav`
  display: block;
  justify-content: center;
  align-self: center;
  justify-items: center;
  align-content: center;
  margin-top: -10px;
`;

export const UnorderedList = styled.ul`
  display: flex;
  align-items: center;
  justify-items: center;
`;

export const ListItems = styled.li`
  font-size: large;
  margin-right: 10px;
  list-style: none;
  padding: 0 10px;
  align-self: center;
  justify-self: center;
  ${neumorphic}

  &:hover {
    background-color: blueviolet;
    cursor: pointer;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: white;
`;
