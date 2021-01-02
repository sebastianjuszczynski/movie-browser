import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 24px;
`;
export const Star = styled.img`
    width: 24px;
    height: 22.87px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 16px;
    height: 15.25px;
  }
`;
export const Rate = styled.span`
    margin: 0 12px;
    font-weight: 600;
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 13px;
    margin: 0 7px;
  }
`;
export const Votes = styled.span`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.waterloo};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 13px;
  }
`;