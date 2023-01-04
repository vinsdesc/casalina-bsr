
const isElementDisplayed = (ele) => {
  return window.getComputedStyle(ele).display !== 'none';
}



// menu desktop
const menuItemDropdown = document.querySelector('.menu--item--dropdown');
const dropdownMenu = document.querySelector('.dropdown--menu');
menuItemDropdown.addEventListener('click', (e) => {
  dropdownMenu.style.display = 'block';
});

// menu phone
const btnMenu = document.querySelector('.btn--menu');
const menuXs = document.querySelector('.menu--xs');
const menuItemDropdownXs = document.querySelector('.menu--item--dropdown--xs');
const dropdownMenuXS = document.querySelector('.dropdown--menu--xs');

const HAMBURGER = 'icon--hamburger';
const CLOSE = 'icon--close';
btnMenu.addEventListener('click', (e) => {
  if (e.target.classList.contains(HAMBURGER)) {
    e.target.classList.remove(HAMBURGER);
    e.target.classList.add(CLOSE);
    menuXs.style.display = 'block';
  } else {
    e.target.classList.add(HAMBURGER);
    e.target.classList.remove(CLOSE);
    menuXs.style.display = 'none';
  }
});

menuItemDropdownXs.addEventListener('click', (e) => {
  if (!isElementDisplayed(dropdownMenuXS)) {
    dropdownMenuXS.style.display = 'block';
  } else {
    dropdownMenuXS.style.display = 'none';
  }
});


document.addEventListener('click', (e) => {
  if (e.target.closest('.menu--item--dropdown')) return
  dropdownMenu.style.display = 'none';
})


// switch color 
// const color_container = document.querySelector('.color--container');
// const color1 = document.querySelector('.color-1');
// const maiin = document.querySelector('main');
// color_container.addEventListener('click', (e) => {
//   const newColor = e.target.classList[e.target.classList.length - 1];
//   if (newColor.includes('color-')) {
//     maiin.className = newColor;
//   }
// });