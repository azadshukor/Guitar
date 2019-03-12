var numberOfGuitarButton = document.querySelectorAll(".guitar").length;

//Detecting Button Press

for (var i = 0; i<numberOfGuitarButton; i++){
    document.querySelectorAll(".guitar")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        
    })
}

//Detecting Keyboard Press
document.addEventListener("keypress", function(event){
    makeSound(aevent.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "E":
            var audio = new Audio("sounds/E.mp3");
            audio.play();
            break;
        case "A":
            var audio = new Audio("sounds/A.mp3");
            audio.play();
            break;
        case "D":
            var audio = new Audio("sounds/D.mp3");
            audio.play();
            break;
        case "G":
            var audio = new Audio("sounds/G.mp3");
            audio.play();
            break;
        case "B":
            var audio = new Audio("sounds/B.mp3");
            audio.play();
            break;
        case "e":
            var audio = new Audio("sounds/e_1.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed"), 100;
    })
}