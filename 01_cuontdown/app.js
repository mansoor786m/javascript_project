let endDate = "15 july 2024 09:30:00 PM"
const launch = document.getElementById("launch")
// const endDate = new Date("launch")
console.log(endDate)




document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("#show")


function clock() {
    const end = new Date(endDate)


    console.log(end)
    const now = new Date()
    console.log(now)
    const diff = (end - now) / 1000;


    if (diff < 0) return;

    // convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

// initial call
clock();
setInterval(function () {
    clock()
},
    1000
)

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

