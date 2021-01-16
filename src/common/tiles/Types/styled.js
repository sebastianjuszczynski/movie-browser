import styled, { css } from "styled-components";

export const TypesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -4px;
  
    @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
      margin-bottom: 0;
    }
`;
export const TypeBox = styled.div`
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.colors.typeBox};
    border-radius: 5px;
    margin: 4px;
    font-size: 14px;
    line-height: 1;
    color: ${({ theme }) => theme.colors.text};
    flex-grow: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
      font-size: 12px;
      padding: 6px 12px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      font-size: 10px;
      padding: 4px 8px;
    }
`;
export const BigTypeBox = styled(TypeBox)`
  line-height: 1.4;

  ${({ clickable }) => clickable && css`
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.activeNavButton};

    &:hover{
      filter: brightness(120%);
    }

    &:active{
      filter: brightness(140%);
    }
  `}

  ${({ enabled }) => enabled && css`
    background: ${({ theme }) => theme.colors.white};
    filter: brightness(160%);
  `}

`;