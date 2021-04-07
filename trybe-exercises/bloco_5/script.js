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
console.log(dezDaysList);

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

function holidayButtons(buttonName) {
  let element = document.createElement('button');
  element.setAttribute('id', 'btn-holiday');
  element.innerText = buttonName;
  document.querySelector('.buttons-container').appendChild(element);
}
holidayButtons('Feriados')