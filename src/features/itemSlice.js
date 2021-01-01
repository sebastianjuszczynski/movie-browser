import { createSlice } from "@reduxjs/toolkit";
import listPaths from "../common/listPaths";

const itemSlice = createSlice({
    name: "item",
    initialState: {
        itemData: [],
        extraData: [],
        loading: true,
        itemId: undefined,
        activeItemPath: "",
        activeExtraPath: "",
    },
    reducers: {
        setItemId: (state, { payload: id }) => {
            state.loading = true;
            state.itemId = id;
        },
        fetchItemSuccess: (state, { payload: itemData, extraData }) => {
            state.itemData = itemData;
            state.extraData = extraData;
            state.loading = false;
        },
        fetchItemError: state => {
            state.loading = false;
        },
        setActivePath: (state, { payload: {path1, path2} }) => {
            state.activeItemPath = path1;
            state.activeExtraPath = path2;
        },
        resetState: (state) => {
            state.itemData = [];
            state.extraData = [];
            state.itemId = undefined;
            state.activeItemPath = "";
            state.activeExtraPath = "";
            state.loading = true;
        },
    },
});

export const {
    setItemId,
    fetchItemSuccess,
    fetchItemError,
    setActivePath,
    resetState,
} = itemSlice.actions;
export const selectItemData = state => state.item.itemData;
export const selectExtraData = state => state.item.extraData;
export const selectLoading = state => state.item.loading;


export default itemSlice.reducer;