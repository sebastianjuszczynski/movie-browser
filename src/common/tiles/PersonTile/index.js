import React from "react";
import {
    PersonWrapper,
    PersonImage,
    PersonDetailsContainer,
    PersonName,
    Subtitle,
} from "./styled";
import noProfileImage from "./../../../assets/noPosterImage.svg";

const PersonTile = ({ profile_path, id, name, subtitle = "" }) => {
    return (
        <PersonWrapper to={`/people/person/${id}`}>
            <PersonImage
                src={profile_path
                    ? `https://image.tmdb.org/t/p/w185${profile_path}`
                    : noProfileImage
                }
                alt={`Zdjęcie ${name}`}
            />
            <PersonDetailsContainer>
                <>
                    {name && <PersonName textLength={name.length} subtitle={subtitle}>{name}</PersonName>}
                    {subtitle && <Subtitle textLength={subtitle.length}>{subtitle}</Subtitle>}
                </>

            </PersonDetailsContainer>
        </PersonWrapper >
    );
};

export default PersonTile;