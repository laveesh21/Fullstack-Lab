var val1 = 0

function clockFun()
{
var val = new Date()
var date = val.toDateString()
var time = val.toTimeString()
var final = date + " " + time

document.getElementById("clock").innerText = final
}


function updateClock(){
    clockFun()
    val1 = setInterval(clockFun, 1000)
}

function zaWardo(){
    clearInterval(val1)
}

function timeDesu(){
    
} 

updateClock()