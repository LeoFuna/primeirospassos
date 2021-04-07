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
dezDaysList.push(1);
dezDaysList.push(2);

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
holidayButton('Feriados')

let theButton = document.getElementById('btn-holiday');
theButton.addEventListener('click', changeColorButton);
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