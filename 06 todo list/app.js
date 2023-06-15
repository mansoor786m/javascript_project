const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box")
const save = document.querySelector("#btn")

item.addEventListener(
    "keyup",
    function (event) {
        if(event.key== "Enter"){
            x=this.value
            console.log(x)
            addToDo(x)
            this.value = ""
        }
    }
)

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
            // saveList()
        }
    )

    listItem.addEventListener(
        "click",
        function() {
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


const saveList = () => {
    alert("not saved")
    // const list = document.querySelector("#to-do-box li ");
    // console.log(list);
    // const listItem = document.createElement("li")
    // const data = [];
    // list.forEach(
    //         (list) => {
    //             data.push(list.value)
    //         }
    //     )
    //     console.log(data)
    // if (data.length === 0) {
    //     localStorage.removeItem("list")
    // } else {
    //     localStorage.setItem("list", JSON.stringify(data))
    // }
}







































// (
//     function() {
//         const lsNotes = JSON.parse(localStorage.getItem("notes"));
//         if (lsNotes === null) {
//             addNote()
//         } else {
//             lsNotes.forEach(
//                 (lsNote) => {
//                     addNote(lsNote)
//                 }
//             )
//         }

//     }
// )() ;