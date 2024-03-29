const endDate = "26 August 2023 6:00 PM"

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input")
const daysInput = inputs[0];
const hoursInput = inputs[1];
const minutesInput = inputs[2];
const secondsInput = inputs[3];

function updateClock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = end - now;
    if(diff<0) return;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysInput.value = days;
    hoursInput.value = hours;
    minutesInput.value = minutes;
    secondsInput.value = seconds;
}

updateClock()

setInterval(
    () => { updateClock() },
    1000
)

