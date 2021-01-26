import './styles.css';
import menu from './menu.json';
import menuItem from './templates/item.hbs';
const menuList = document.querySelector('.js-menu');
menuList.insertAdjacentHTML('beforeend', menuItem(menu));

const themeSwitchBtn = document.querySelector('#theme-switch-toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const darkTheme = function () {
  document.body.classList.add('dark-theme');
  document.body.classList.remove('light-theme');
  localStorage.setItem('theme', Theme.DARK);
};
const lightTheme = function () {
  document.body.classList.add('light-theme');
  document.body.classList.remove('dark-theme');
  localStorage.setItem('theme', Theme.LIGHT);
};
themeSwitchBtn.addEventListener('change', e => {
  if (themeSwitchBtn.checked) {
    darkTheme();
  } else {
    lightTheme();
  }
});

const localValue = localStorage.getItem('theme');
function saveLocalStrValue() {
  if (localValue === Theme.DARK) {
    themeSwitchBtn.checked = true;
    document.body.classList.add('dark-theme');
  }
}
saveLocalStrValue();
