
window.onload = function() {

  let content = document.querySelectorAll('.view-port');
  for (let index = 0; index < content.length; index += 1) {
    content[index].style.backgroundColor = localStorage.bgc;
    content[index].style.color = localStorage.textColor;
  }
}


let buttonsBg = document.querySelectorAll('.button-bg');

buttonsBg[0].addEventListener('click', changeBgColor);
buttonsBg[1].addEventListener('click', changeBgColor);

function changeBgColor(event) {
  let content = document.querySelectorAll('.view-port');
  if (event.target.innerText === 'Dark') {
    for (let index = 0; index < content.length; index += 1) {
      content[index].style.backgroundColor = 'rgb(47,52,55)';
      localStorage.bgc = content[index].style.backgroundColor;
    }
  } else {
    for (let index = 0; index < content.length; index += 1) {
      content[index].style.backgroundColor = 'white';
      localStorage.bgc = content[index].style.backgroundColor
    }
  }
}

let buttonsText = document.querySelectorAll('.button-text');

buttonsText[0].addEventListener('click', changeTextColor);
buttonsText[1].addEventListener('click', changeTextColor);

function changeTextColor(event) {
  let content = document.querySelectorAll('.view-port');
  if (event.target.innerText === 'Dark') {
    for (let index = 0; index < content.length; index += 1) {
      content[index].style.color = 'black';
      localStorage.textColor = content[index].style.color;
    }
  } else {
    for (let index = 0; index < content.length; index += 1) {
      content[index].style.color = 'white';
      localStorage.textColor = content[index].style.color;
    }
  }
}