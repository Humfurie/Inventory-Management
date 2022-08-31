var add_modal = document.getElementById("add-modal");
var edit_modal = document.getElementById("edit-modal");
var help_modal = document.getElementById("help-modal");
var add_btn = document.getElementById("add-button");
var edit_btn = document.getElementById("edit-button");
var help_btn = document.getElementById("help-button");
var add_close = document.getElementsByClassName("close")[0];
var edit_close = document.getElementsByClassName("close")[1];
var help_close = document.getElementsByClassName("close")[2];

//onclick event to open modals
add_btn.onclick = function() {
  add_modal.style.display = "block";
  add_modal.animate
}
// edit_btn.onclick = function() {
//   edit_modal.style.display = "block";
//   edit_modal.animate
// }
help_btn.onclick = function() {
  help_modal.style.display = "block";
  help_modal.animate
}
//onclick event to close modals using the close button
add_close.onclick = function() {
  add_modal.style.display = "none";
}
edit_close.onclick = function() {
  edit_modal.style.display = "none";
}
help_close.onclick = function() {
  help_modal.style.display = "none";
}
//onclick event to close modals by clicking outside of modal content
window.onclick = function(event) {
  if(event.target == add_modal) {
    add_modal.style.display = "none";
  }
  else if(event.target == edit_modal) {
    edit_modal.style.display = "none";
  }
  else if(event.target == help_modal) {
    help_modal.style.display = "none";
  }
}

