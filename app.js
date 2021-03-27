// select the individual image like text items
const items = document.querySelectorAll('.item');
// get the "right" arrow button
const rightButton = document.getElementById('right');
// right button event listener
rightButton.addEventListener('click', () => {
  for (let i = 0; i < items.length; i++) {
    // console.log(getComputedStyle(items[i]).display);
    // if it's computed style is block...
    if (getComputedStyle(items[i]).display === 'block') {
      console.log(items[i].textContent);
      items[i].style.display = 'none';
      console.log(getComputedStyle(items[i + 1]).display);
      console.log(items[i + 1].textContent);
      items[i + 1].style.display = 'block';
      return;
    }
  }
});

// if (items[i].style.display == 'none') {
//     console.log(items[i].textContent);
//   }
