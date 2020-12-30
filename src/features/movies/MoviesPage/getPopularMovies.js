import axios from "axios";
import store from "./../../../store";

export const getPopularMovies = async () => {
    const page = store.getState().movies.activePage;
    let response;
    await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=db28f87903ed5f61125cde9d85f339b2&language=en-US&page=${page}`)
        .then(data => response = data)
        .catch(() => console.log("error"))
    return response.data;
};