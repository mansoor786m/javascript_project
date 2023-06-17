const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`

const form = document.querySelector('form')
const search = document.querySelector('#search')
const weather = document.querySelector('#weather')









const getWeather = async (city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    let responce = await fetch(url);
    const data = await responce.json();
    console.log(data);
    return showWeather(data)
}

const showWeather= (data) =>{
    if (data.cod == "404") {
        weather.innerHTML = "No Response";
    } else {
        weather.innerHTML =`
        <div class="col">
        <h2>${data.weather[0].main}</h2>
        <img  src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div class="col">
        <h2>city</h2>
        <h4 > ${search.value}</h4>
    </div>
    <div class="col">
        <h2>Temp </h2>
        <h4> ${data.main.temp} ℃ </h4>
    </div>
    <div class="col">
        <h2>Hum:</h2>
        <h4 > ${data.main.humidity}% </h4>
    </div>
    <div class="col">
        <h2>feels</h2>
        <h4 > ${data.main.feels_like}% </h4>
    </div>
    <div class="col">
        <h2 >wind</h2>
        <h4 > ${data.wind.speed} </h4>
    </div>
        `


        //  `
        // <div>
        //         <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        //     </div>
        //     <div>
        //         <h2>${data.main.temp} ℃</h2>
        //         <h4> ${data.weather[0].main} </h4>
        //     </div>
        //     <div>
        //     <h2>Rain</h2>
        //     <h4>wind</h4>
        // </div>
        // `
    }
}

form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value);
        event.preventDefault();
    }
)











// const form = document.querySelector("form")
// const search = document.querySelector("#search")
// const weather = document.querySelector("#weather")
//     // const API = `https://api.openweathermap.org/data/2.5/weather?
//     // q=${city}&appid=${API_KEY}&units=metric`
//     // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
// const getWeather = async(city) => {
//     weather.innerHTML = `<h2> Loading... <h2>`
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//     const response = await fetch(url);
//     const data = await response.json()
//     return showWeather(data)
// }

// const showWeather = (data) => {
//     if (data.cod == "404") {
//         weather.innerHTML = `<h2> City Not Found <h2>`
//         return;
//     }
//     weather.innerHTML = `
//         <div>
//             <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
//         </div>
//         <div>
//             <h2>${data.main.temp} ℃</h2>
//             <h4> ${data.weather[0].main} </h4>
//         </div>
//     `
// }

// form.addEventListener(
//     "submit",
//     function(event) {
//         getWeather(search.value)
//         event.preventDefault();
//     }
// )