const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");

function getTime(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeInterval = 6;

    secondHand.style.transform = "rotate("+ (seconds * timeInterval) + "deg)";
    minuteHand.style.transform = "rotate("+ (minutes * timeInterval) + "deg)";
    hourHand.style.transform = "rotate("+ (hours * timeInterval*5) + "deg)";


}
setInterval(getTime, 100)
