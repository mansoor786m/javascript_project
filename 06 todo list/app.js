const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box")
const save = document.querySelector("#btn")

item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            const x = this.value
            // console.log(x)
            addToDo(x)
            this.value = ""
        }
    }
)

const saveList = () => {
    const todolist = document.querySelectorAll("#to-do-box li");
    // console.log(todolist);
    const data = [];
    todolist.forEach(
        (note) => {
            console.log(note.innerText)
            data.push(note.innerText);
        }

    )
    // console.log(data)           
        if (data.length === 0) {
            localStorage.removeItem("todolist")
        } else {
            localStorage.setItem("todolist", JSON.stringify(data))
        }

}


const addToDo = (item) => {
    const listItem = document.createElement("li")
    listItem.innerHTML = `
    ${item}
    <i class="fas fa-times"></i>
    `

    listItem.querySelector("i").addEventListener(
        "click",
        function () {
            listItem.remove()
            saveList()
        }
    )

    listItem.addEventListener(
        "click",
        function () {
            this.classList.toggle("done");
            saveList()
        }
    )

    save.addEventListener(
        "click",
        function () {
        saveList()

        }
    )

    toDoBox.appendChild(listItem);
    saveList();
}

const start= ()=>{
    let data = JSON.parse(localStorage.getItem("todolist"))
    console.log(data)
    if(data.length == 0){ addToDo()}
    else{
        for(let i=0; i<data.length ; i++){
            addToDo(data[i])
        }
    }





}

start();