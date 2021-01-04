import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import apiKey from "../../../common/apiKey";
import language from "../../../common/language";
import Loading from "../../../common/Loading";
import { selectResults, setActiveSearchPath, selectLoading } from "./../searchSlice";
import { Wrapper } from "./styled";
import NoResult from "./../../../common/NoResult";
import MiniTile from "../../../common/tiles/MiniTile";
import noPosterImage from "./../../../assets/noPosterImage.svg";
import noProfileImage from "./../../../assets/noProfileImage.svg";

const DynamicResultsBox = ({ query }) => {
    const dispatch = useDispatch();
    const results = useSelector(selectResults);
    const isLoading = useSelector(selectLoading);
    const location = useLocation();
    const searchText = location.pathname.includes("movie") ? "movie" : "person";

    useEffect(() => {
        dispatch(setActiveSearchPath(
            `https://api.themoviedb.org/3/search/${searchText}?api_key=${apiKey}&language=${language}&query=${query}`
        ));
    }, [query]);

    return (
        <Wrapper >
            {isLoading
                ? <Loading />
                : !results.length
                    ? <NoResult urlQuery={query} />
                    : results.map(result =>
                        <MiniTile
                            key={result.id}
                            searchText={searchText}
                            data={searchText === "movie"
                                ? {
                                    id: result.id,
                                    text: result.title,
                                    image: result.poster_path
                                        ? `https://image.tmdb.org/t/p/w154${result.poster_path}`
                                        : noPosterImage
                                }
                                : {
                                    id: result.id,
                                    text: result.name,
                                    image: result.profile_path
                                        ? `https://image.tmdb.org/t/p/w185${result.profile_path}`
                                        : noProfileImage
                                }
                            }
                        />
                    )
            }
        </Wrapper>
    );
};

export default DynamicResultsBox;