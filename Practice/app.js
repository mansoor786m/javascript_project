const popup = document.querySelector('.popup-box'),
    addnote = document.querySelector('.add-box')
const closebtn = document.querySelector('.fa-xmark')
const btn = document.querySelector('#btn')
const addNoteTitle = document.querySelector('#title');
const addNoteDesc = document.querySelector('#description'),
    addNoteHead = document.querySelector('.box-heading')
let update = false, updateIndex = 0;


//to avoid overwrit while adding new notes
let notearr = JSON.parse(localStorage.getItem("LocalNoteOBJ") || "[]");


// 07 to edit and update note
const editNote = (index, title, description) => {
    update = true
    updateIndex = index;
    btn.innerText = 'Update Note'
    addNoteHead.innerText = 'Update Note';
    addNoteTitle.value = title;
    addNoteDesc.value = description;
    addNoteTitle.focus()
    popup.classList.add('show')
    console.log(index, title, description)
    
}

// 06 to delete any note
const deleteNote = (e) => {
    let deleteNote = confirm("Are you Sure you want to delete?")
    if (!deleteNote) {
        return
    }
    notearr.splice(e, 1)
    localStorage.setItem('LocalNoteOBJ', JSON.stringify(notearr))
    showNotes();
}

//05 function to show "delete/edit" menu
const showMenu = (e) => {
    e.parentElement.classList.add('show')
    document.addEventListener('click', (input) => {
        if (input.target != e) {
            e.parentElement.classList.remove('show')
        }
    })
};

// 04 to show notes in browser
const showNotes = () => {
    if (notearr == null) {
        return
    }

    // to remove duplicate notes
    document.querySelectorAll('.note').forEach((note) => {
        note.remove()
    });

    // to add note in browser from storage
    notearr.forEach((element, index) => {
        let notebody = document.createElement('div');
        notebody.classList.add('note');
        notebody.classList.add('item');
        notebody.innerHTML = `    <div class="details">
        <h2>${element.title}</h2>
        <p>${element.description}</p>
    </div>
    <div class="bottom-area">
        <span>${element.date}</span>
        <div class="setting">
            <div class="menu">
                <div onclick="editNote('${index}', '${element.title}', '${element.description}')" class="edit abc">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <span>Edit</span>
                </div>
                <div onclick="deleteNote(${index})" class="delete abc">
                    <i class="fa-solid fa-trash-can"></i>
                    <span>Delete</span>
                </div>
            </div>
            <i onclick="showMenu(this)" class="fa-solid fa-ellipsis"></i>
        </div>
    </div>`
        document.querySelector('.wrapper').appendChild(notebody)
    });
}; showNotes()

//01 to show new note window on click on "add new note"
addnote.addEventListener('click', () => {
    btn.innerText = 'Add Note'
    addNoteHead.innerText = 'Add a New Note';
    addNoteTitle.value = '';
    addNoteDesc.value = '';
    addNoteTitle.focus()
    popup.classList.add('show')
})

//02 to close new note window on clicking "x"
closebtn.addEventListener('click', () => {
    popup.classList.remove('show')
})

// 03 to get values from new note window
btn.addEventListener('click', () => {
    //get values of title and description
    let title = addNoteTitle.value,
        description = addNoteDesc.value;

    //get date
    let date = new Date();
    date = date.toDateString();

    //to ensure that title or description must be entered
    if (title || description) {
        // making object of title date and description
        let noteobj = {
            title,
            description,
            date
        }
        if (update == false) {
            notearr.push(noteobj)
        } else {
            notearr[updateIndex] = noteobj;
            update = false;
        }

        // adding notes to local storage
        localStorage.setItem('LocalNoteOBJ', JSON.stringify(notearr))
        closebtn.click()
        showNotes()
    }
})