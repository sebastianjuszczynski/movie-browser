import styled from "styled-components";

export const TypesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export const TypeBox = styled.div`
    padding: 8px 16px;
    height: 36px;
    background-color: ${({theme}) => theme.colors.cornsilk};
    border-radius: 5px;
    margin: 0 8px 8px 0;
    font-size: 14px;
    line-height: 140%;
    color: ${({theme}) => theme.colors.woodsmoke};
    flex-grow: 0;
`;
export const BigTypeBox = styled(TypeBox)`
    font-size: 14px;
    line-height: 100%;
    width: 81px;
    height: 30px;
    margin-right: 8px;
`;