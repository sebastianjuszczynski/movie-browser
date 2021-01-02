import React from "react";
import {
    BigTileWrapper,
    BigTileImage,
    BigTileHeader,
    BigDetailsContainer,
    Detail,
    MarkedDetail,
    Description,
    DetailsWrapper,
} from "./styled";
import noProfileImage from "./../../../assets/noProfileImage.svg";

const BigPersonTile = ({ profile_path, name, birthday, place_of_birth, biography }) => {

    return (
        <BigTileWrapper as="div">
            <BigTileImage
                src={profile_path
                    ? `https://image.tmdb.org/t/p/h632${profile_path}`
                    : noProfileImage
                }
                alt={`Picture of ${name}`}
            />
            <BigDetailsContainer>
                {name && <BigTileHeader>{name}</BigTileHeader>}
                <DetailsWrapper>
                    {birthday && 
                    <Detail> 
                        <MarkedDetail>Date of birth: </MarkedDetail>    {birthday}
                    </Detail>}
                        {place_of_birth && 
                    <Detail>
                        <MarkedDetail>Place of birth: </MarkedDetail> {place_of_birth}
                    </Detail>}
                    </DetailsWrapper>
                {biography && <Description>{biography}</Description>}
            </BigDetailsContainer>
        </BigTileWrapper>
    );
};

export default BigPersonTile;