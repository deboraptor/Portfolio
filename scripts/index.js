/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

/* lance un papillon quand on clique */
function flyButterfly() {
  var imagejavascript = document.createElement("img");
  imagejavascript.src = "butterfly.gif";
  document.body.appendChild(imagejavascript)
}

if (openNav()) {
    flyButterfly();
} else if (closeNav()) {
    document.getElementById("myNav").removeEventListener("click", flyButterfly);
}