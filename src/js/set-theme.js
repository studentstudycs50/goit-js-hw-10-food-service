import refs from "./refs.js"

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const onDarkTheme = () => {
  refs.bodyRef.className = Theme.DARK
};
const onLightTheme = () => {
  refs.bodyRef.className = Theme.LIGHT
};

refs.checkboxReference.checked =
  localStorage.getItem('theme') === 'true' ? true : false;
  refs.checkboxReference.checked ? onDarkTheme() : onLightTheme();

refs.checkboxReference.addEventListener('change', event => {
  localStorage.setItem('theme', event.target.checked);
  refs.checkboxReference.checked ? onDarkTheme() : onLightTheme();
});

//const content = document.querySelector('.content');
