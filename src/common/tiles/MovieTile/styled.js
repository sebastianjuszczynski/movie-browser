import styled from "styled-components";
import { Wrapper, Image } from "./../tilesStyles";

export const MovieWrapper = styled(Wrapper)`
    flex-direction: column;
    width: 324px;
    padding: 16px;
    min-height: 650px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        flex-direction: row;
        width: 100%;
        min-height: unset;
    }
`;
export const MovieImage = styled(Image)`
    object-fit: cover;
    margin-bottom: 16px;
    height: 434px;
    width: 292px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    width: auto;
    height: 230px;
    margin-right: 20px;
    margin-bottom: 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 169px;
    width: 114px;
    margin-right: 0;
  }
`;