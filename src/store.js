import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./features/listSlice";
import itemReducer from "./features/itemSlice";
import searchReducer from "./features/Search/searchSlice";
import commonReducer from "./common/commonSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const SagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        list: listReducer,
        item: itemReducer,
        common: commonReducer,
        search: searchReducer,
    },
    middleware: [SagaMiddleware],
});
SagaMiddleware.run(rootSaga);

export default store;