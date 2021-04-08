function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

let dezDaysList = [29,30];
for (let index = 1; index < 32; index += 1) {
  dezDaysList.push(index);
}

function createDays(day) {
  let element = document.createElement('li');
  element.className = 'day';
  element.innerText = day;
  if (day === 24 || day === 25 || day === 31) {
    element.classList.add('holiday');
  }
  if (day === 4 || day === 11 || day === 18 || day === 25){
    element.classList.add('friday');
  }
  document.getElementById('days').appendChild(element);
}

for (let index = 0; index < dezDaysList.length; index += 1) {
  createDays(dezDaysList[index]);
}

function holidayButton(buttonName) {
  let element = document.createElement('button');
  element.setAttribute('id', 'btn-holiday');
  element.innerText = buttonName;
  document.querySelector('.buttons-container').appendChild(element);
}
holidayButton('Feriados');

let theHolidayButton = document.getElementById('btn-holiday');
theHolidayButton.addEventListener('click', changeColorButton);
function changeColorButton() {
  if (document.getElementsByClassName('holiday')[0].style.backgroundColor === 'blue') {
    let allHolidays = document.getElementsByClassName('holiday')
    for (let index = 0; index < allHolidays.length; index += 1) {
      allHolidays[index].style.backgroundColor = 'rgb(238,238,238)';
    }
  } else {
    let allHolidays = document.getElementsByClassName('holiday')
    for (let index = 0; index < allHolidays.length; index += 1) {
      allHolidays[index].style.backgroundColor = 'blue';
    }
  }
}

function fridayButton(buttonName) {
  let element = document.createElement('button');
  element.setAttribute('id', 'btn-friday');
  element.innerText = buttonName;
  document.querySelector('.buttons-container').appendChild(element);
}
fridayButton('Sexta-feira');

let theFridayButton = document.getElementById('btn-friday');
theFridayButton.addEventListener('click', changeButtonText);
function changeButtonText() {
  let allFridays = document.getElementsByClassName('friday');
  if (allFridays[0].innerText !== 'SEXTOU') {
    for (let index = 0; index < allFridays.length; index += 1) {
      allFridays[index].innerText = 'SEXTOU';
    }
  } 
  else 
  {
    let fridaysInNumber = [];
    for (let index = 4; index < dezDaysList.length; index += 7) {
      fridaysInNumber.push(index);
    }
    for (let index = 0; index < allFridays.length; index += 1) {
      allFridays[index].innerText = fridaysInNumber[index];
    }
  }
}

let captureZoomElement = document.querySelectorAll('.day')[2];
captureZoomElement.addEventListener('mouseover', zoomIn);
captureZoomElement.addEventListener('mouseleave', zoomOut);
function zoomIn(element) {
  element.target.style.transform = 'scale(2)';
}
function zoomOut(element) {
  element.target.style.transform = 'scale(1)';
}

function addTask(task) {
  let newElement = document.createElement('span');
  newElement.innerText = task;
  document.querySelector('.my-tasks').appendChild(newElement);
}
addTask('cozinhar');

function colorForTask(color) {
  let element = document.createElement('div');
  element.style.backgroundColor = color;
  element.className = 'task';
  document.querySelector('.my-tasks').appendChild(element);
}
colorForTask('magenta');