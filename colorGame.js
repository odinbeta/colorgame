var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var gameOver = false;

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add initial colors
	squares[i].style.background = colors[i];


	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		
		var clickedColor = this.style.background;
		console.log(clickedColor, pickedColor);
		

		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again";
			} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
			gameOver = true;
		}

	});
}

resetButton.addEventListener("click", function(){ 
	reset(numSquares);
});

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	reset(numSquares);
	for (var i = 3; i < squares.length; i++) {
			squares[i].style.display = "none";
		}
	
});


hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	reset(numSquares);

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.display = "block";
	}


});


////// FUNCTIONS ///////


function changeColors(color){

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
};

function pickColor() {
	var random = [Math.floor(Math.random() * colors.length)]
	return colors[random];
}

function generateRandomColors(num) {
	var arr = []

	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(num) {
	colors = generateRandomColors(num);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = " ";
	resetButton.textContent = "New Colors";
	h1.style.background = "steelblue";
	gameOver = false;

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
}









