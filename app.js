// select the individual image like text items
const items = document.querySelectorAll('.item');

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const dots = document.getElementsByClassName('dot');
  if (n > items.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = items.length; }
  for (i = 0; i < items.length; i++) {
    items[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  items[slideIndex - 1].style.display = 'block';
}

const rightButton = document.getElementById('right');
const leftButton = document.getElementById('left');
rightButton.addEventListener('click', ((e) => {
  plusSlides(1);
}));
leftButton.addEventListener('click', (e) => {
  plusSlides(-1);
});

// //this is how I've been doing this assignment, turns out there's a smarter way
// //the problem with mine: whenever I reach to the end of the loop, I can't take it from the start
// // get the "right" arrow button
// const rightButton = document.getElementById('right');
// // right button event listener
// rightButton.addEventListener('click', () => {
//   for (let i = 0; i < items.length; i++) {
//     // console.log(getComputedStyle(items[i]).display);
//     // if it's computed style is block...
//     if (getComputedStyle(items[i]).display === 'block') {
//       console.log(items[i].textContent);
//       items[i].style.display = 'none';
//       //   console.log(getComputedStyle(items[i + 1]).display);
//       console.log(items[i + 1].textContent);
//       items[i + 1].style.display = 'block';
//       console.log(i);

//       return;
//     }
//   }
// });
