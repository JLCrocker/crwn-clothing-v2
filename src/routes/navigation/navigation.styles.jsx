import { styled } from 'styled-components';

import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 84%;
  display: flex;
  justify-content: space-between;
  margin: 15px auto;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 12px;
  justify-content: flex-start;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  transition: transform 500ms ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;
