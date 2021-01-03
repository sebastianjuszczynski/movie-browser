import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { useLocation } from "react-router-dom";
import {selectQuery, setQuery} from "../listSlice";
import { useReplacePageParameters } from "../pageParameters";
import { SearchBox, Input, StyledLensButton } from "./styled";

const Search = () => {
    const query = useSelector(selectQuery);
    const dispatch = useDispatch();
    const replacePageParameters = useReplacePageParameters();
    const location = useLocation();
    const searchText = location.pathname.includes("movie") ? "movies" : "people";

    const onFormSubmit = (event) => {
        event.preventDefault();
        replacePageParameters([
            {
                key: "search",
                value: query,
            },
            {
                key: "page",
                value: 1,
            }
        ]);
    };


    return (
        <SearchBox onSubmit={onFormSubmit}>
            <Input
                placeholder={`Search for ${searchText}`}
                value={query}
                onChange={({ target }) => dispatch(setQuery(target.value))}
            />
            <StyledLensButton />
        </SearchBox>
    );
};

export default Search;