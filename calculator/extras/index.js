//CALCULATOR IN HTML | BY STELIOS THEO//
const display = document.getElementById("display");
//-----//
function appendtodisplay(input) {
    display.value += input;
}
//-----//
function C() {
    display.value = "";
}
//-----//
function equals() {
  try {
     display.value = eval(display.value)
  }
  catch(error) {
    display.value = "Error (Value not correct)";
  }
}

function equals2() {
  try {
    display2.value = eval(display2.value)
 }
 catch(error) {
   display2.value = "Error (Value not correct)";
 }
}
function showclbtn() {
  document.getElementById("clbtn").style.visibility = "visible";
  document.getElementById("chcl1").style.visibility = "hidden";
  document.getElementById("chcl2").style.visibility = "hidden";
  document.getElementById("refresh").style.visibility = "visible";
}
function showclnobtn() {
  document.getElementById("clnobtn").style.visibility = "visible";
  document.getElementById("chcl1").style.visibility = "hidden";
  document.getElementById("chcl2").style.visibility = "hidden";
  document.getElementById("refresh").style.visibility = "visible";
}
function refresh() {
  window.location.href="cl.html";
}