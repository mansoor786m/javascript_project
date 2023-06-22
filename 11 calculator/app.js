let string = "";
let screen = document.querySelector("#screen");
let buttons = document.querySelectorAll(".button");
let clear = document.querySelectorAll("#clear");
let equal = document.querySelectorAll("#equal");

// let


buttons.forEach((button) =>{
    button.addEventListener('click',(e) =>{
            let value =e.target.innerHTML        
            if (value == '=') {
                string = eval(string);
                screen.value = string
            } else if (value == 'C'){
                string = "" 
                screen.value = string
            }else{

                string += value ;
                screen.value = string;
            }

            console.log(string)
        
        })
})