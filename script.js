/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
function swapStyleSheet(sheet) {
  document.getElementById("pagestyle").setAttribute("href", sheet);
}

function initate() {
  var style1 = document.getElementById("stylesheet1");
  var style2 = document.getElementById("stylesheet2");

  style1.onclick = function() {
    swapStyleSheet("csl.css");
  };
  style2.onclick = function() {
    swapStyleSheet("alt-csl.css");
  };
}

window.onload = initate;
