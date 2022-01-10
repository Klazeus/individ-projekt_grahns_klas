/*const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];*/

const deadline = document.querySelector(".giveaway-deadline");
const timer = document.querySelectorAll(".giveaway-deadline-format h4");

let futureDate = new Date(2022,1,13,12,30,0);

const futureTime = futureDate.getTime();

function getremainingTime() {
    const today = new Date().getTime();
    const timeLeft = futureTime - today;
    console.log(timeLeft);
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1d = 24hr

    //values in ms
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    // calculate all values
    let days = Math.floor(timeLeft/oneDay);
    let hours = Math.floor((timeLeft % oneDay)/oneHour);
    let minutes = Math.floor((timeLeft % oneHour)/oneMinute);
    let seconds = Math.floor((timeLeft % oneMinute)/1000);
    
    //Set values arrays
    const values = [days,hours,minutes,seconds];

    function format(item) {
        if (item < 10) {
            return (item = `0${item}`);
        }
        return item;
    }

    timer.forEach(function(item,index){
        item.innerHTML = format(values[index]);
    });

    if(timeLeft < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="giveaway-expired">sorry the giveaway has already expired</h4>`
    }
}
// Countdown
let countdown = setInterval(getremainingTime, 1000);


getremainingTime();