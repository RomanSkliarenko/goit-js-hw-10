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
const changeTheme = function () {
  if (themeSwitchBtn.checked) {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.body.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
  if (
    themeSwitchBtn.checked &&
    document.body.classList.contains('light-theme')
  ) {
    document.body.classList.remove('light-theme');
  }
};
themeSwitchBtn.addEventListener('change', changeTheme);

function saveLocalStrValue() {
  const localValue = localStorage.getItem('theme');
  if (localValue === Theme.DARK) {
    themeSwitchBtn.checked = true;
    document.body.classList.add('dark-theme');
  }
}
saveLocalStrValue();
// Кстати, я нашел в чем была проблема с морганием. в стилях для body есть транзишн. я его убрал и стало норм :)
