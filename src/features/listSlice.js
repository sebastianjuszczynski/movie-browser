import { createSlice } from "@reduxjs/toolkit";
import listPaths from "../common/listPaths";

const listSlice = createSlice({
    name: "people",
    initialState: {
        list: [],
        loading: true,
        activePage: 1,
        numberPages: undefined,
        activePath: "/movie/popular",
    },
    reducers: {
        fetchListSuccess: (state, { payload: list }) => {
            state.list = list.results;
            state.numberPages = list.total_pages;
            state.loading = false;
        },
        fetchListError: state => {
            state.loading = false;
        },
        setActivePage: (state, { payload: pageNumber }) => {
            state.activePage = pageNumber;
            state.loading = true;
        },
        setActivePath: (state, { payload: name }) => {
            state.activePath = listPaths[name];
        },
        resetState: (state) => {
            state.list = [];
            state.activePage = undefined;
            state.activePath = "";
            state.numberPages = undefined;
            state.loading = true;
        },
    },
});

export const {
    fetchListSuccess,
    fetchListError,
    setActivePage,
    setActivePath,
    resetState,
} = listSlice.actions;
export const selectList = state => state.list.list;
export const selectLoading = state => state.list.loading;
export const selectActivePage = state => state.list.activePage;
export const selectNumberPages = state => state.list.numberPages;

export default listSlice.reducer;