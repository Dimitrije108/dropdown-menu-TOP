import html from './index.html';
import './style.css';
import { dropdownOnHover, dropdownOnClick } from 'dropdown-menu-jimmy108';
// Hover navbar items
const navItems = document.querySelectorAll('.nav-item');
const navItemsArray = [...navItems];

navItemsArray.forEach((navItem) => {
  const dropdown = navItem.querySelector('.dropdown-list');
  dropdownOnHover(navItem, dropdown);
});
// Click three dot menu
const libOptionsBtn = document.querySelector('.library-options-btn');
const libOptionsMenu = document.querySelector('.three-dots-menu');

dropdownOnClick(libOptionsBtn, libOptionsMenu, false);
