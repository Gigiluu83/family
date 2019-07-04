/*******SLIDESHOW*******/

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 4 seconds
};


var titles = [];
var titleInput = document.getElementById("title");
var messageBox = document.getElementById("display");
function Allow()
{
if (!user.title.value.match(/[a-zA-Z]$/) && user.title.value !="")
{
user.title.value="";
alert("Please Enter only alphabets");
}
window.location.reload()
}
function insert () {
titles.push(titleInput.value);
clearAndShow();
}
function clearAndShow ()
{
titleInput.value = "";
messageBox.innerHTML = "";
messageBox.innerHTML += " " + titles.join("<br/> ") + "<br/>";
}
