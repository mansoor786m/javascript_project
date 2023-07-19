const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movies_box = document.querySelector('#movie-box')
const search = document.querySelector("#search")


const getMovies = async (url) => {
    const responce = await fetch(url);
    // console.log(responce);
    const data = await responce.json();
    showMovies(data)
}; getMovies(APIURL);

const showMovies = (data) => {

    data.results.forEach(
        (item) => {
            // console.log(item);

            const note = document.createElement("div");
            note.classList.add("box");

            note.innerHTML = `
            <img src="${IMGPATH + item.poster_path}" alt="image not found">
            <div class="overlay">
                <div class="title">
                    <h2>${item.title}</h2>
                    <span>${item.vote_average}</span>
                </div>

                <div class="overview">
                    <p>${item.overview}</p>
                </div>
            </div>
            `
            movies_box.appendChild(note);


        });


}
search.addEventListener(
    "keyup",
     (e) => {
        let search = e.target.value
        // console.log( search);
        
        if(search != ""){
            console.log(search);
            
            getMovies(SEARCHAPI + search)
        }
        else{
            console.log("show movies");
            
            // getMovies(APIURL)
        }
    }
)