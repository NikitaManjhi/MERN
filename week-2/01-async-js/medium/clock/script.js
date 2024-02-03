let clock = document.getElementById("clock")
const currentDate= new Date();
let hour = currentDate.getHours();
let min = currentDate.getMinutes();
let sec = currentDate.getSeconds();

let am_pm = "AM"

function clockFunction(){
    if(hour>12){
        hour= hour-12;
        am_pm ="PM"
    }

    sec=sec+1;
    if(sec>59){
        min++;
        sec=0;
        if(min>59){
            hour++;
            min=0;
        }
    }

    if(min>59){
        hour++;
        min=0;
    }


    let currentTime = `${hour} : ${min} : ${sec} ${am_pm} `
    clock.innerHTML = currentTime;
}


setInterval(clockFunction,1000);



