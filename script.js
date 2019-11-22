console.log("locals",localStorage.getItem("age"))
if(localStorage.getItem("age"))
{
    let age=localStorage.getItem("age")
    if(age>25)
    {

    document.getElementById("display").style.fontSize="48px"
    document.getElementsByClassName("btnNum")[0].style.fontSize="21px"
    document.getElementsByClassName("btnNum")[1].style.fontSize="21px"
    document.getElementsByClassName("btnNum")[2].style.fontSize="21px"
    document.getElementsByClassName("btnNum")[3].style.fontSize="21px"
    document.getElementsByClassName("btnNum")[4].style.fontSize="21px"
    document.getElementsByClassName("btnNum")[5].style.fontSize="21px"
    document.getElementsByClassName("btnNum")[6].style.fontSize="21px"
    document.getElementsByClassName("btnNum")[7].style.fontSize="21px"
    document.getElementsByClassName("btnNum")[8].style.fontSize="21px"
    document.getElementsByClassName("btnNum")[9].style.fontSize="21px"
    // document.getElementsByClassName("btnNum")[10].style.fontSize="21px"
    }
}

function playAudio(url) {
    var a = new Audio(url);
    a.play();
  }


function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}


function cos(form) {
   
	form.display.value = Math.cos(form.display.value);
}

function sin(form) {
	form.display.value = Math.sin(form.display.value);
}

function tan(form) {
	form.display.value = Math.tan(form.display.value);
}

function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}

function ln(form) {
	form.display.value = Math.log(form.display.value);
}

function exp(form) {
    form.display.value = Math.exp(form.display.value);
    const mySound = document.getElementById("sound");  
    mySound.play() 
}

function deleteChar(input) {
    input.value = input.value.substring(0, input.value.length - 1)
    const mySound = document.getElementById("sound");  
    mySound.play() 
}
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}

function compute(form) {
  //if (val !== 0.0) {
   // var percent = form.display.value;  
   // percent = pcent.substring(percent.indexOf("%")+1);
   // form.display.value = parseFloat(percent)/100 * val;
    //val = 0.0;
 // } else 
    form.display.value = eval(form.display.value);
    const mySound = document.getElementById("sound");  
    mySound.play() 
  }


function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
    const mySound = document.getElementById("sound");  
    mySound.play() 
}

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}