import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../common/Loading";
import BottomNavigation from "../../BottomNavigation";
import {
    selectList,
    selectLoading,
    selectError,
    setActivePath,
    resetState,
    selectTotalResults,
} from "../../listSlice";
import { PeopleContainer } from "./../../../common/tiles/TileContainer";
import Header from "./../../../common/Header/Header";
import { usePageParameter } from "../../pageParameters";
import PersonTile from "./../../../common/tiles/PersonTile";
import apiKey from "../../../common/apiKey";
import language from "../../../common/language";
import NoResult from "../../../common/NoResult";
import Error from "../../../common/Error";
import { WidthContainer } from "../../../styled";

const PeoplePage = () => {
    const dispatch = useDispatch();
    const urlPageNumber = +usePageParameter("page");
    const urlQuery = usePageParameter("search");
    const popularPeople = useSelector(selectList);
    const totalResults = useSelector(selectTotalResults);
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);

    useEffect(() => {
        dispatch(setActivePath(urlQuery
            ? `https://api.themoviedb.org/3/search/person${apiKey}${language}&query=${urlQuery}&page=${urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber}`
            : `https://api.themoviedb.org/3/person/popular${apiKey}${language}&page=${urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber}`)
        );
        return () => {
            dispatch(resetState());
        };
    }, [urlPageNumber, urlQuery, dispatch])

    return (
        <WidthContainer>
            {isLoading
                ? <Loading />
                : isError
                    ? <Error />
                    : (!popularPeople.length
                        ? <NoResult urlQuery={urlQuery} />
                        : (
                            <>
                                <Header>
                                    {urlQuery
                                        ? `Search results for "${urlQuery}" (${totalResults})`
                                        : "Popular People"
                                    }
                                </Header>
                                <PeopleContainer>
                                    {popularPeople.map(({ profile_path, id, name }) =>
                                        <PersonTile
                                            key={id}
                                            profile_path={profile_path}
                                            id={id}
                                            name={name}
                                        />
                                    )}
                                </PeopleContainer>
                                <BottomNavigation />
                            </>
                        )
                    )}
        </WidthContainer>
    );
};

export default PeoplePage;