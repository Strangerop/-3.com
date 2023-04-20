const button = document.querySelector('#moving-button');

button.addEventListener('mousemove', () => {
  const maxWidth = window.innerWidth - button.clientWidth;
  const maxHeight = window.innerHeight - button.clientHeight;
  
  const randomX = Math.floor(Math.random() * maxWidth);
  const randomY = Math.floor(Math.random() * maxHeight);
  
  button.style.left = Math.abs(button.offsetLeft - randomX) + 'px';
  button.style.top = Math.abs(button.offsetTop - randomY) + 'px';
});
