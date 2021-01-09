import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";


const activeClassName = "link-active";

export const Nav = styled.nav`
    min-height: 94px;
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
`;
export const WidthContainer = styled.div`
    max-width: 1400px;
    min-height: 100%;
    margin: 0 auto;
    padding: 16px;
`;
export const WidthNavContainer = styled(WidthContainer)`
  padding: 0;
`;
export const NavContainer = styled.div`
    display: flex;
    flex-basis: 50%;
    justify-content: center;
    align-items: center;
    min-height: inherit;
    padding: 0 10px;
    flex-wrap: wrap;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    min-height: 71px;
  }
`;

export const NavContainerLeft = styled(NavContainer)`
  flex-wrap: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    flex-basis: 80vw;
    justify-content: space-evenly;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-basis: 100%;
    justify-content: space-around;
  }
`;

export const NavContainerRight = styled(NavContainer)`
    justify-content: flex-end;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-basis: 100%;
    justify-content: center;
  }
`;
export const List = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    padding-left: 0;
    list-style: none;
`;
export const ListItem = styled.li`
    text-decoration: none;
`;
export const StyledNavLink = styled(NavLink).attrs(() =>
({
  activeClassName,
}))`
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    padding: 13px 24px;
    margin: 0 10px;

    &.${activeClassName} {
        border: 1px solid ${({ theme }) => theme.colors.white};
        border-radius: 33px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 13px;
    padding: 11px 18px;
    margin: 0 3px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 12px;
    padding: 8px 12px;
    margin: 0 3px;
  }
`;
export const Title = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 500;
  padding-left: 16px;
  margin: 0;
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 18px;
    padding: 10;
    margin-right: 22px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 13px;
    padding: 0;
    margin-right: 19px;
  }
`;
export const Logo = styled.img`
    height: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 12px;
    height: 17px;
  }
`; 

