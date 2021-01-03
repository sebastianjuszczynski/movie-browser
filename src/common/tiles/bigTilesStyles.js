import styled from "styled-components";
import { Wrapper } from "./tilesStyles";

export const BigTileWrapper = styled(Wrapper)`
    flex-direction: row;
    width: 100%;
    padding: 40px;
    margin: 56px auto 64px;
`;
export const BigTileHeader = styled.div`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
`;
export const BigDetailsContainer = styled.div`
    display: grid;
    height: fit-content;
    grid-gap: 24px;
    margin-left: 40px;
`;
export const Detail = styled.div`
    font-size: 18px;
    line-height: 1.2;
`;
export const MarkedDetail = styled.span`
    color: ${({ theme }) => theme.colors.stormGray};   
`;
export const Description = styled.div`
    font-size: 20px;
    line-height: 1.6;
`;
export const DetailsWrapper = styled.div`
    display: grid;
    grid-gap: 8px;
`;