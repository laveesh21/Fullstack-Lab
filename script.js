const audio = new Audio("beep.mp3");
const buttons = document.querySelectorAll("button");





// const hoverButton = document.getElementById("hoverButton");
const popup = document.getElementById("btn")


buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

//_______________________________________________________
const getColor = () => {
    //Hex Code
    const randomNumber = Math.floor(Math.random()*16777215)
    const randColor = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randColor;
    document.getElementById("colorcode").innerText = randColor;
}

//event call
document.getElementById("btn").addEventListener("click", getColor)

//initial call
getColor();
