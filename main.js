const hambug = document.querySelector('.navbar_hambug')
const items = document.querySelector('.navitems')
const icons = document.querySelector('.navicons')

hambug.addEventListener('click', () => {
  items.classList.toggle('active');
  icons.classList.toggle('active');
});
