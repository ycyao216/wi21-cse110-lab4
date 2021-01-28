
// function printTime() {
//     let d = new Date();
//     let time = d.toLocaleDateString();
//     console.log(time);
// }

// let time_id = setInterval(printTime, 1000);

function pN() {
    console.log(1);
    setTimeout(function () { console.log(2); }, 1000);
    setTimeout(function () { console.log(3); }, 0);
    console.log(4);
}

pN();