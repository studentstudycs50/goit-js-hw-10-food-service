import refs from "./refs.js"
console.log(refs);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const onDarkTheme = () => {
  refs.bodyRef.classList.remove(Theme.LIGHT);
  refs.bodyRef.classList.add(Theme.DARK);
};
const onLightTheme = () => {
  refs.bodyRef.classList.remove(Theme.DARK);
  refs.bodyRef.classList.add(Theme.LIGHT);
};

refs.checkboxReference.checked =
  localStorage.getItem('theme') === 'true' ? true : false;
  refs.checkboxReference.checked ? onDarkTheme() : onLightTheme();

refs.checkboxReference.addEventListener('change', event => {
  localStorage.setItem('theme', event.target.checked);
  refs.checkboxReference.checked ? onDarkTheme() : onLightTheme();
});

//const content = document.querySelector('.content');
