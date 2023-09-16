var today = new Date();

// Get the target date
var target = new Date("9/15/2023");

// Calculate the time difference in milliseconds
var diff = today.getTime() - target.getTime();

// Calculate the number of days
var days = Math.round(diff / (1000 * 60 * 60 * 24));

// Display the result
console.log(days + " days until December 25, 2022");
document.getElementById("date").innerHTML = days + " Days ago / 15 SEP 2023"
var TimeAfterSrart = 0
var interval = setInterval(TimeCounter,1000);
function TimeCounter(){

    TimeAfterSrart += 1;

console.log(TimeAfterSrart)
// return time


if (TimeAfterSrart == 2){
    
    console.log("stage_1 stop")
}
if (TimeAfterSrart == 10){
    
    console.log("Stage_2 start")
}
if (TimeAfterSrart == 12){
    
    console.log("Stage_2 Stoped")
clearInterval(interval)
}
}