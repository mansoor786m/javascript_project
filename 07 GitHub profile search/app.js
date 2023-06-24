const searchbox = document.querySelector('search');
const APIURL = "https://api.github.com/users/";
const main = document.querySelector("#main");

const getData = async (username) => {
    const responce = await fetch(APIURL + username);
    const data = await responce.json();
    const card = `
    <div class="card">
    <div>
        <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
    </div>
    <div class="user-info">
        <h2>${data.name}</h2>
        <p>${data.bio}</p>

        <ul class="info">
            <li>${data.followers}<strong>Followers</strong></li>
            <li>${data.following}<strong>Following</strong></li>
            <li>${data.public_repos}<strong>Repos</strong></li>
        </ul>

        <div id="repos">
           
        </div>
    </div>
</div>
            `


    // console.log(responce)
    
    main.innerHTML = card;
    getrepos(username);

}

const getrepos = async (username) =>{
    const repos = document.querySelector("#repos")
    const responce = await fetch ( APIURL + username +"/repos");
    const data = await responce.json();
    data.forEach((item) => {
        const a = document.createElement("a")
        a.classList.add("repo")
        a.href = item.url;
        a.innerText = item.name;
        repos.appendChild("a")
        
    });
    console.log(data)
}

getData("mansoor786m");




{/* <a class="repo" href="#" target="_blank">Repo 1</a> */}
{/* <a class="repo" href="#" target="_blank">Repo 2</a> */}
{/* <a class="repo" href="#" target="_blank">Repo 3</a> */}