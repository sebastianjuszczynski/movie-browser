import styled from "styled-components";
import { ReactComponent as InputIcon } from "./../../assets/input-logo.svg";

export const Input = styled.input`
    width: 432px;
    height: 48px;
    border: 1px solid ${({ theme }) => theme.colors.cornsilk};
    border-radius: 33px;
    padding-left: 64px;
    background-color: white;
    &:focus {
        outline: none;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 288px;
        height: 44px;
        padding-left: 40px;
    }
`;

export const InputBox = styled.div`
    position: relative;
`;

export const StyledInputIcon = styled(InputIcon)`
    position: absolute;
    left: 27px;
    top: 14px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        height: 14px;
        left: 16px;
        top: 15px;
    }
`;