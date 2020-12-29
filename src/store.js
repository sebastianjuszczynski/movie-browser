import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/MoviesPage/moviesSlice";
import createSagaMiddleware from "redux-saga";
import { watchFetchPopularMovies } from "./features/movies/MoviesPage/moviesSaga";

const SagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
    middleware: [SagaMiddleware],
});
SagaMiddleware.run(watchFetchPopularMovies);

export default store;