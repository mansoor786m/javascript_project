const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movies = document.querySelector('#movie-box')


const getMovies = async (url) => {
    const responce = await fetch(url);
    // console.log(responce);
    const data = await responce.json();
    showMovies(data)
}; getMovies(APIURL);

const showMovies = (data) => {

    data.results.forEach(
        (item) => {
        console.log(item);


    });


}