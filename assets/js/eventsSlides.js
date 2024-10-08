let count_1 = 1;
let count_2 = 1;
const totalSlides1 = 5;
const totalSlides2 = 5
document.getElementById("radio1-1").checked = true;
document.getElementById("radio2-1").checked = true;

setInterval(function() {
  nextImage()
}, 3000)

function nextImage() {

  document.getElementById("radio1-"+count_1).checked = true;
  count_1++;
  if (count_1 > totalSlides1) {
    count_1 = 1;
  }

  document.getElementById("radio2-"+count_2).checked = true;
  count_2++;
  if (count_2 > totalSlides2) {
    count_2 = 1;
  }
}