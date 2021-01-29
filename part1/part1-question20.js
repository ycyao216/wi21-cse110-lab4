function printTime() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}

let time_id = setInterval(printTime, 1000);