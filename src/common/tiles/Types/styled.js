import styled from "styled-components";

export const TypesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export const TypeBox = styled.div`
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.colors.cornsilk};
    border-radius: 5px;
    margin: 0 8px 8px 0;
    font-size: 14px;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.woodsmoke};
    flex-grow: 0;
  
    @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}) {
  }
`;
export const BigTypeBox = styled(TypeBox)`
    font-size: 14px;
    line-height: 1;
    margin-right: 8px;
`;