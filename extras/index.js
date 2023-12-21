function choose() {
    document.getElementById("yourcolor").style.visibility = "visible";
    document.getElementById("color").innerHTML = document.getElementById("cp").value;
    document.getElementById("copy").style.visibility = "visible";
    document.getElementById("reset").style.visibility = "visible";
    document.getElementById("title").style.color = document.getElementById("cp").value;
}
function copy() {
    navigator.clipboard.writeText(document.getElementById("cp").value);
    alert("COPIED : " + document.getElementById("cp").value)
}
function reset() {
    window.location.reload();
    document.getElementById("reset").style.visibility = "hidden";
}