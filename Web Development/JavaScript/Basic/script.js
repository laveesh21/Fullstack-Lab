const boxColor = document.getElementById("nameBox") 

boxColor.addEventListener("keyup",
    () => {
        if(boxColor.value===""){
            boxColor.style.backgroundColor = "#D90000"; //RED
        }else{
            boxColor.style.backgroundColor = "#00ff1e"; //GREEN
        }
    }
);

boxColor.addEventListener("click", function(){
    boxColor.classList.add("smash")
    boxColor.classList.remove("name")
});

boxColor.addEventListener("blur", function(){
    boxColor.classList.remove("smash")
});