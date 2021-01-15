import React from "react";
import {
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
import { BigTileImage, BigPersonWrapper } from "./styled";
import noProfileImage from "./../../../assets/noProfileImage.svg";

const BigPersonTile = ({ profile_path, name, birthday, place_of_birth, biography }) => {
    const date = new Date(birthday);

    return (
      <BigPersonWrapper as="div">
        <DesktopWrapper>
          <BigTileImage
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/h632${profile_path}`
                : noProfileImage
            }
            alt={`Photo of ${name}`}
          />
            {name && <BigTileHeader>{name}</BigTileHeader>}
            <DetailsWrapper>
              {birthday && (
                <Detail>
                  <MarkedDetail>Date of birth: </MarkedDetail> {`${date.toLocaleDateString()}`}
                </Detail>
              )}
              {place_of_birth && (
                <Detail>
                  <MarkedDetail>Place of birth: </MarkedDetail> {place_of_birth}
                </Detail>
              )}
            </DetailsWrapper>
            {biography && <Description>{biography}</Description>}
        </DesktopWrapper>
        <MobileWrapper>
          <TopWrapper>
            <BigTileImage
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/h632${profile_path}`
                  : noProfileImage
              }
              alt={`Photo of ${name}`}
            />

            <BigDetailsContainer>
              {name && <BigTileHeader>{name}</BigTileHeader>}
              <DetailsWrapper>
                {birthday && (
                  <Detail>
                    <MarkedDetail>Date of birth: </MarkedDetail> {`${date.toLocaleDateString()}`}
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
      </BigPersonWrapper>
    );
};

export default BigPersonTile;