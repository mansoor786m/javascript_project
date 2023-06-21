x="12345678"
y= [1,2,3,4,5,6,7,8,9]

const shuffel_string = (arr) =>{
    arr = arr.split("");
    let j,temp
    for (let index = 1; index < arr.length; index++) {
        j = Math.floor(Math.random() *index-1);
        temp =arr[index];
        arr[index] = arr[j]
        arr[j] = temp
        
    }
    return arr.join("")

// }shuffel_string is used to shuffel the all element of string 
console.log(shuffel_string(x))




const shuffel_array = (arr) =>{
    // arr = arr.split("");
    let j,temp
    for (let index = 1; index < arr.length-1; index++) {
        j = Math.floor(Math.random() *index);
        temp =arr[index];
        arr[index] = arr[j]
        arr[j] = temp
        
    }
    return arr

}
console.log(shuffel_array(y))