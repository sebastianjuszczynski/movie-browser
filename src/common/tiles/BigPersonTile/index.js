import React from "react";
import {
    BigTileWrapper,
    BigTileHeader,
    BigDetailsContainer,
    Detail,
    MarkedDetail,
    Description,
    DetailsWrapper,
    MobileWrapper,
    DesktopWrapper,
    TopWrapper,
} from "../bigTilesStyles";
import { BigTileImage } from "./styled";
import noProfileImage from "./../../../assets/noProfileImage.svg";

const BigPersonTile = ({ profile_path, name, birthday, place_of_birth, biography }) => {

    return (
      <BigTileWrapper as="div">
        <DesktopWrapper>
          <BigTileImage
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/h632${profile_path}`
                : noProfileImage
            }
            alt={`Zdjęcie ${name}`}
          />

          <BigDetailsContainer>
            {name && <BigTileHeader>{name}</BigTileHeader>}
            <DetailsWrapper>
              {birthday && (
                <Detail>
                  <MarkedDetail>Date of birth: </MarkedDetail> {birthday}
                </Detail>
              )}
              {place_of_birth && (
                <Detail>
                  <MarkedDetail>Place of birth: </MarkedDetail> {place_of_birth}
                </Detail>
              )}
            </DetailsWrapper>
            {biography && <Description>{biography}</Description>}
          </BigDetailsContainer>
        </DesktopWrapper>
        <MobileWrapper>
          <TopWrapper>
            <BigTileImage
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/h632${profile_path}`
                  : noProfileImage
              }
              alt={`Zdjęcie ${name}`}
            />

            <BigDetailsContainer>
              {name && <BigTileHeader>{name}</BigTileHeader>}
              <DetailsWrapper>
                {birthday && (
                  <Detail>
                    <MarkedDetail>Date of birth: </MarkedDetail> {birthday}
                  </Detail>
                )}
                {place_of_birth && (
                  <Detail>
                    <MarkedDetail>Place of birth: </MarkedDetail>{" "}
                    {place_of_birth}
                  </Detail>
                )}
              </DetailsWrapper>
            </BigDetailsContainer>
          </TopWrapper>
          {biography && <Description>{biography}</Description>}
        </MobileWrapper>
      </BigTileWrapper>
    );
};

export default BigPersonTile;