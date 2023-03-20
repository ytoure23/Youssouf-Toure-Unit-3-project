let title = document.querySelector(".title")


let option1Screen = document.querySelector(".option1screen")
console.log(option1Screen)
option1Screen.style.display = "none"


let option2screen = document.querySelector(".option2screen")
option2screen.style.display = "none"

let option1end = document.querySelector(".option1End")
option1end.style.display = "none"

let option2end = document.querySelector(".option2End")
option2end.style.display = "none"


let Firsth1= document.querySelector(".Firsth1")
Firsth1.style.display = "none"

let option1= document.querySelector(".optionone")

let start = document.querySelector(".start")

let option2= document.querySelector(".optiontwo")

let optionone= document.querySelector(".option1")

let optiontwo= document.querySelector(".option2")
 
let option1Continue= document.querySelector(".option1Continue")

let option2Continue= document.querySelector(".option2Continue")
 
let restart= document.querySelector(".Restart")






start.onclick=function() {
  Firsth1.style.display = "block"
  title.style.display = "none"
}

/* option1Screen.onclick=function() {
   Firsth1.style.display = "none"
  option1Screen.style.display = "block"
 }
*/
 option1.onclick=function() {
  Firsth1.style.display = "none"
  option1Screen.style.display = "block"
 }


optionone.onclick=function() {
  option2screen.style.display = "block"
  option1Screen.style.display = "none"
 }

optiontwo.onclick=function() {
  option2end.style.display = "block"
  option1Screen.style.display = "none"
 }

option1Continue.onclick=function() {
  option2screen.style.display = "block"
  option1End.style.display = "none"
 }



/*option1.onclick=function() {
  Firsth1.style.display = "none"
  option1end.style.display = "block"
 }
*/
option2.onclick=function() {
  Firsth1.style.display = "none"
  option2end.style.display = "block"
 }
option2.onclick=function() {
  Firsth1.style.display = "none"
  option2end.style.display = "block"
 }

option1Continue.onclick=function() {
  option2screen.style.display = "none"
  option1end.style.display = "block"
 }

restart.onclick=function() {
  option2end.style.display = "none"
  title.style.display = "block"
 }















console.log("Hi")






































// Prints option1Screen
// Option 1 Button choice 1: Hm, Ill try to guess the code maybe ill get somthing useful!.
// Option 1 Button choice 2: >This looks too strange to be tampered with!


// Option 2 Button Choice 1: I dont think its the best idea to ask him. Ill find out my self
// Option 2 Button Choice 2:  Of course! I need every bit of help i can get!




















// option1Screen.style.display = "none"









/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
