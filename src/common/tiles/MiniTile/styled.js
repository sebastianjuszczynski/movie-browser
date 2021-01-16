import { Link } from "react-router-dom";
import styled from "styled-components";

export const MiniWrapper = styled(Link)`
    display: flex;
    flex-shrink: 0;
    padding: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.typebox};
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    
    :hover {
        background-color: ${({ theme }) => theme.colors.background};
    }
`;

export const MiniImage = styled.img`
    object-fit: cover;
    flex: 0 1 auto;
    display: block;
    width: 80px;
    height: 140px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        height: 100px;
    }
`;

export const MiniText = styled.p`
    margin-left: 24px;
    font-size: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 12px;
        margin: 8px;
        line-height: 1.2;
    }
`;