import styled from "styled-components";
import { Wrapper, Image, DetailsContainer, Title } from "../MovieTile/styled";

export const PersonWrapper = styled(Wrapper)`
    width: 208px;
    height: 339px;
`;
export const PersonImage = styled(Image)`
    width: 176px;
    height: 231px;
    object-fit: cover;
    object-position: top;
`;
export const PersonDetailsContainer = styled(DetailsContainer)`
    grid-template-columns: repeat(6, 1fr);
`;
export const PersonName = styled(Title)`
    text-align: center;
`;
export const Subtitle = styled.p`
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    color: ${({theme}) => theme.colors.waterloo};
    margin: 0;
`;