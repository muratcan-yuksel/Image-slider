// //so this is possible

// const element = document.getElementById('try');

// window.onload = element.style.visibility = 'visible';
const container = document.getElementById('container');
const items = document.querySelectorAll('.item');
const rightButton = document.getElementById('right');
rightButton.addEventListener('click', () => {
  for (let i = 0; i < items.length; i++) {
    console.log(getComputedStyle(items[i]).display);
  }
});

// if (items[i].style.display == 'none') {
//     console.log(items[i].textContent);
//   }
