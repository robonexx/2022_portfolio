// just using js to get the path lenght of the svg paths for animation with keyframes

var logo = document.querySelectorAll("#logo path");
for (let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
