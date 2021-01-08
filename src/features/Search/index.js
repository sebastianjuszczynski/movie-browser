import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectOpen, selectQuery, setOpen, setQuery } from "./searchSlice";
import { useReplacePageParameters } from "../pageParameters";
import DynamicResultsBox from "./DynamicResultBox";
import { SearchBox, Input, StyledLensButton } from "./styled";

const Search = () => {
    const query = useSelector(selectQuery);
    const isOpen = useSelector(selectOpen);
    const dispatch = useDispatch();
    const replacePageParameters = useReplacePageParameters();
    const location = useLocation();
    const searchText = location.pathname.includes("movie") ? "movies" : "people";

    useEffect(() => {
        dispatch(setQuery(""));
    }, [location]);

    const onChange = (value) => {
        dispatch(setQuery(value));
        dispatch(setOpen(true));
    };
    
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
        dispatch(setQuery(""));
    };


    return (
        <SearchBox onSubmit={onFormSubmit}>
            <StyledLensButton />
            <Input
                placeholder={`Search for ${searchText}`}
                value={query}
                open={isOpen}
                onChange={({ target }) => onChange(target.value)}
            />
             {(query && isOpen) &&
                <DynamicResultsBox query={query} />
            }
        </SearchBox>
    );
};

export default Search;