const searchbox = document.querySelector('#search');
const APIURL = "https://api.github.com/users/";
const main = document.querySelector("#main");

const getData = async (username) => {
    const responce = await fetch(APIURL + username);
    const data = await responce.json();
    console.log(data)
    const card = `
    <div class="card">
    <div>
        <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
    </div>
    <div class="user-info">
        <h2>${data.name +"/" +data.login}</h2>
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

    main.innerHTML = card;
    getrepos(username);

}

const getrepos = async (username) =>{
    const repos = document.querySelector("#repos")
    const responce = await fetch ( APIURL + username +"/repos");
    const data = await responce.json();
    data.forEach(
        (item) => {
        
        const a = document.createElement("a")
        a.classList.add("repo")
        a.href = item.html_url;
        a.innerText = item.name;
        a.target = "_blank"
        repos.appendChild(a)
        
    });
   
}


const submitform = ()=>{
   
    console.log(searchbox.value)
    if (searchbox != ""){
        getData(searchbox.value);
        searchbox.value = ""
    }

    return false;
}




/* <a class="repo" href="#" target="_blank">Repo 1</a> */
/* <a class="repo" href="#" target="_blank">Repo 2</a> */
/* <a class="repo" href="#" target="_blank">Repo 3</a> */