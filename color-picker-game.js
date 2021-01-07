var num = 6;
var colors = generateRandomColors(num);
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".squares");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

hardBtn.classList.add("selected");
hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
	num = 6;
	colors = generateRandomColors(num);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	message.textContent = "";
	h1.style.backgroundColor = "steelblue";
	for(var i=0; i<colors.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}

});
	
easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
	num = 3;
	colors = generateRandomColors(num);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	message.textContent = "";
	h1.style.backgroundColor = "steelblue";
	for(var i=0; i<colors.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	for(var i=3; i<6; i++){
		squares[i].style.display = "none";
	}

});


colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){

	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			message.textContent = "Correct";
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
			reset.textContent = "Play Again?";
		} else{
			message.textContent = "Try Again";
			this.style.backgroundColor = "#232323";
		}
	});
}

reset.addEventListener("click",function(){

	reset.textContent = "New Colors";
	colors = generateRandomColors(num);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	message.textContent = "";
	h1.style.backgroundColor = "steelblue";
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
});











// FUNCTIONS---------------------------------------------------------------------

function changeColors(x){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = x;
	}
}

function generateRandomColors(num){
	arr = [];
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}	
