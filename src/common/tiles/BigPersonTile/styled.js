import styled from "styled-components";
import { Image } from "./../tilesStyles";

export const BigTileImage = styled(Image)`
   object-fit: cover;
   max-height: 564px;
   width: 399px;

   @media (max-width: ${({theme}) => theme.breakpoints.screenSmall}px) {
      max-height: 439px;
      width: 312px;
   }
   @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
      max-height: 362px;
      width: 258px;
   }
   @media (max-width: 560px) {
      max-height: 260px;
      width: 186px;
   }
   @media (max-width: 490px) {
      max-height: 204px;
      width: 146px;
   }
   @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
      max-height: 163px;
      width: 116px;
   }
`;