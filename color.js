// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)",
// ];
var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay =document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var modeButtons = document.querySelectorAll(".mode");


// init();

// function init(){

// }



for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected")
        modeButtons[1].classList.remove("selected")
        this.classList.add("selected")

        // this.textContent === "easy" ? numOfSquares =3: numOfSquares=6;
        if(this.textContent === "easy"){
            numOfSquares =3
        }
        else{
            numOfSquares = 6
        }
        reset();
    })
}

function reset(){
    colors = generateRandomColors(numOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colors to picked colors
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for ( var i =0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display ="block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display ="none";
        }

    }
    h1.style.backgroundColor = "#steelblue"
    messageDisplay.textContent = "";
    resetButton.textContent ="New Colors"

}


// easyBtn.addEventListener("click",function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numOfSquares = 3;
// 	colors = generateRandomColors(numOfSquares)
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0 ; i<squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else{
// 			squares[i].style.display= "none";
// 		}
// 	}
// })

// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numOfSquares = 6
// 	colors = generateRandomColors(numOfSquares)
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0 ; i<squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];

// 			squares[i].style.display= "block";
// 		}
// 	}
// })


resetButton.addEventListener("click",function(){
    reset();
})
// resetButton.addEventListener("click",function(){
// 	//generate all new colors
// 	colors = generateRandomColors(numOfSquares);
// 	//pick a new random color from array
// 	pickedColor = pickColor();
// 	//change colors to picked colors
// 	colorDisplay.textContent = pickedColor;
// 	//change colors of squares
// 	for ( var i =0;i<squares.length;i++){
// 		squares[i].style.backgroundColor = colors[i];
// 	}
// 	h1.style.backgroundColor = "#steelblue"
// 	messageDisplay.textContent = "";
// 	this.textContent ="New Colors"
// })


colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listener to squares
    squares[i].addEventListener("click",function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;

        //compare color to pickedcolor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "play again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else{
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Try again";
        }

    });
}


function changeColors(colors){
    //loop through all squares
    for(var i = 0; i<squares.length;i++){
        //change each color to match given color
        squares[i].style.backgroundColor = colors;
    }
}

function pickColor(){

    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function generateRandomColors(num){
    //make a array
    var arr = []
    // repeat num times
    for(var i = 0; i < num ; i++){
        arr.push(randomColor());
        //get random colors and push into array
    }
    //return the array
    return arr;
}

function randomColor(){
    //pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)

    return "rgb(" + r +", "+ g + ", " + b + ")";

}








