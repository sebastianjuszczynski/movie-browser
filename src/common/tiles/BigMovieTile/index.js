import React from "react";
import Ratings from "../Ratings";
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
import { BigMovieWrapper, BigMovieImage } from "./styled";
import noPosterImage from "./../../../assets/noPosterImage.svg";
import Types from "../Types";

const BigMovieTile = ({
  poster_path,
  title,
  release_date,
  vote_average,
  vote_count,
  genre_ids,
  production_countries,
  overview,
}) => {
  const date = new Date(release_date);

  return (
    <BigMovieWrapper as="div">
      <DesktopWrapper>
        <BigMovieImage
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w342${poster_path}`
              : noPosterImage
          }
          alt={`Plakat filmu ${title}`}
        />
        <BigDetailsContainer>
          {title && <BigTileHeader>{title}</BigTileHeader>}
          <DetailsWrapper>
            {production_countries && production_countries.length > 0 && (
              <Detail>
                <MarkedDetail>Production: </MarkedDetail>
                {production_countries.map(country => country.name).join(", ")}
              </Detail>
            )}
            {release_date && (
              <Detail>
                <MarkedDetail>Release date: </MarkedDetail> {`${date.toLocaleDateString()}`}
              </Detail>
            )}
          </DetailsWrapper>
          <Types big={true} genre_ids={genre_ids} />
          <Ratings
            vote_average={vote_average}
            vote_count={vote_count}
            big={true}
          />
          {overview && <Description>{overview}</Description>}
        </BigDetailsContainer>
      </DesktopWrapper>
      <MobileWrapper>
        <TopWrapper>
          <BigMovieImage
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w342${poster_path}`
                : noPosterImage
            }
            alt={`Plakat filmu ${title}`}
          />
          <BigDetailsContainer>
            {title && <BigTileHeader>{title}</BigTileHeader>}
            <DetailsWrapper>
              {production_countries && production_countries.length > 0 && (
                <Detail>
                  <MarkedDetail>Production: </MarkedDetail>
                  {production_countries.map(country => country.name).join(", ")}
                </Detail>
              )}
              {release_date && (
                <Detail>
                  <MarkedDetail>Release date: </MarkedDetail> {`${date.toLocaleDateString()}`}
                </Detail>
              )}
            </DetailsWrapper>
            <Types genre_ids={genre_ids} />
            <Ratings
              vote_average={vote_average}
              vote_count={vote_count}
              big={true}
            />
          </BigDetailsContainer>
        </TopWrapper>
        {overview && <Description>{overview}</Description>}
      </MobileWrapper>
    </BigMovieWrapper>
  );
};

export default BigMovieTile;
