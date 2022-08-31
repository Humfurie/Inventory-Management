var modal = document.getElementById("add-modal");
var btn = document.getElementById("add-button");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
  modal.animate
}
document.querySelector(".close").addEventListener("click", function() {
  modal.style.display = "none";
}); 
// span.onclick = function() {
//   modal.style.display = "none";
// }
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}