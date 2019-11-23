localStorage.setItem("sound",true)


function as(a){

const aa= localStorage.getItem("sound")
console.log(aa)
if(aa=="true")
{

  const mySound = document.getElementById("sound")
  mySound.src=a  
    mySound.play()
  }
} 
  function toggle()
  {


    if(document.getElementById("1").value=="OFF"){
      document.getElementById("1").value="ON";
      localStorage.setItem("sound",true)
    
    }
   
     else if(document.getElementById("1").value=="ON"){
      document.getElementById("1").value="OFF";
      localStorage.setItem("sound",false)
    }
   
  }
console.log("locals",localStorage.getItem("age"))
if(localStorage.getItem("age"))
{
    let age=localStorage.getItem("age")
    if(age>25)
    {
     

    document.getElementById("display").style.fontSize="48px"
    document.getElementsByClassName("btnMath")[0].style.fontSize="25px"
    document.getElementsByClassName("btnMath")[1].style.fontSize="25px"
    document.getElementsByClassName("btnMath")[2].style.fontSize="25px"
    document.getElementsByClassName("btnMath")[3].style.fontSize="25px"
    document.getElementsByClassName("btnMath")[4].style.fontSize="25px"
    document.getElementsByClassName("btnMath")[5].style.fontSize="25px"
    document.getElementsByClassName("btnMath")[6].style.fontSize="25px"
    document.getElementsByClassName("btnMath")[7].style.fontSize="25px"
    document.getElementsByClassName("btnMath")[8].style.fontSize="25px"
    document.getElementsByClassName("btnMath")[9].style.fontSize="25px"


    document.getElementsByClassName("btnNum")[0].style.fontSize="45px"
    document.getElementsByClassName("btnNum")[1].style.fontSize="45px"
    document.getElementsByClassName("btnNum")[2].style.fontSize="45px"
    document.getElementsByClassName("btnNum")[3].style.fontSize="45px"
    document.getElementsByClassName("btnNum")[4].style.fontSize="45px"
    document.getElementsByClassName("btnNum")[5].style.fontSize="45px"
    document.getElementsByClassName("btnNum")[6].style.fontSize="45px"
    document.getElementsByClassName("btnNum")[7].style.fontSize="45px"
    document.getElementsByClassName("btnNum")[8].style.fontSize="45px"
    document.getElementsByClassName("btnNum")[9].style.fontSize="45px"


    document.getElementsByClassName("btnTop")[0].style.fontSize="30px"
    document.getElementsByClassName("btnTop")[1].style.fontSize="30px"
    document.getElementsByClassName("btnTop")[2].style.fontSize="30px"


    document.getElementsByClassName("btnOpps")[0].style.fontSize="30px"
    document.getElementsByClassName("btnOpps")[1].style.fontSize="30px"
    document.getElementsByClassName("btnOpps")[2].style.fontSize="30px"
    // document.getElementsByClassName("btnNum")[10].style.fontSize="21px"
    }
}

function playAudio(url) {
    var a = new Audio(url);
    a.play();
  }


function addChar(input, character) {
  as("c.wav")
  if(input.value == null || input.value == "0")
    input.value = character
    
	else
		input.value += character
}




function sqrt(form) {
  form.display.value = Math.sqrt(form.display.value);
  as("c.wav")
}

function ln(form) {
  form.display.value = Math.log(form.display.value);
  as("c.wav")
}

function exp(form) {
    form.display.value = Math.exp(form.display.value);
    as("c.wav")
}

function deleteChar(input) {
    input.value = input.value.substring(0, input.value.length - 1)
    as("b.wav")
}
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
  as("c.wav")
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
    as("b.wav")
  }


function square(form) {
	// form.display.value = eval(form.display.value) * eval(form.display.value)
  //   const mySound = document.getElementById("sound");  
  //   mySound.play() 
  as("c.wav")
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