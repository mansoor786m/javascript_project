const getcolor = ()=> {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);

    document.body.style.backgroundColor = randomCode ;
    document.getElementById("color-code").innerHTML = randomCode;

    console.log(randomNumber)
    console.log(randomCode)

}

// add Eventcall

document.getElementById("btn").addEventListener("click", getcolor )

// initial call function
getcolor();

