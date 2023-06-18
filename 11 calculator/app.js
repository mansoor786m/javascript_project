const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"


// selectors
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")

const arr=[upperSet , lowerSet, numberSet, symbolSet ]

const shuff = (arr) => {
    let array = arr.split("");
    console.log(array)
    let j, tem;
    for (let i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i));
        tem = array[i];
        array[i] = array[j];
        array[j] = tem;

    }
    return array.join("");
}





const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}


const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if (password.length < totalChar.value) {
        return generatePassword(password)
    }

   
    
    let passString= truncateString(password, totalChar.value);
    passBox.innerText = shuff(passString);
}


generatePassword();

document.getElementById("btn").addEventListener(
    "click",
    function () {
        generatePassword();
    }

)


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}