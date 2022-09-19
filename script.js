document.getElementById('mode').addEventListener('click', function () {
  let img = this.src;
  if (img.includes('dark.svg')) {
    document.getElementById('mode').src = './images/light.svg';
  } else {
    document.getElementById('mode').src = './images/dark.svg';
  }
  document.body.classList.toggle('dark-mode');
});
