import { takeEvery, call, put, delay } from "redux-saga/effects";
import { getPopularMovies } from "./getPopularMovies";
import {
    fetchPopularMovies,
    fetchPopularMoviesError,
    fetchPopularMoviesSuccess,
} from "./moviesSlice";

function* fetchExampleTasksHandler() {
    try {
        yield delay(500);
        const popularMovies = yield call(getPopularMovies);
        yield put(fetchPopularMoviesSuccess(popularMovies.results));
    } catch (error) {
        yield put(fetchPopularMoviesError());
        yield call(alert, "Something went wrong...");
    }
};

export function* watchFetchPopularMovies() {
    yield takeEvery(fetchPopularMovies.type, fetchExampleTasksHandler);
};