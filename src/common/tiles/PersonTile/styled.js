import styled from "styled-components";
import { Wrapper, Image, DetailsContainer, Title } from "./../tilesStyles";

export const PersonWrapper = styled(Wrapper)`
    width: 208px;
    flex-direction: column;
    padding: 16px;
`;
export const PersonImage = styled(Image)`
    width: 176px;
    height: 231px;
    object-fit: cover;
    object-position: top;
    margin-bottom: 16px;
`;
export const PersonDetailsContainer = styled(DetailsContainer)`
    grid-template-columns: repeat(6, 1fr);
`;
export const PersonName = styled(Title)`
    text-align: center;
    font-size: ${({ subtitle }) => subtitle ? "18px" : "22px"};
`;
export const Subtitle = styled.p`
    font-size: ${({ textLength }) => (textLength > 20)
        ? "12px"
        : "16px"
    };
    line-height: 150%;
    text-align: center;
    color: ${({ theme }) => theme.colors.waterloo};
    margin: 0;
`;