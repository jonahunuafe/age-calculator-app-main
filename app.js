'use strict';

const button = document.getElementById('calculate-button');
button.addEventListener('click', calculateAge);

function calculateAge() {
  const currentDate = new Date();
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();

  var inputDay = parseFloat(document.getElementById('day-input').value);
  var inputMonth = parseFloat(document.getElementById('month-input').value);
  var inputYear = parseFloat(document.getElementById('year-input').value);

  let dayToRed = document.querySelector('#day');
  let monthToRed = document.querySelector('#month');
  let yearToRed = document.querySelector('#year');

  const dayErrorMessage = document.querySelector('.input-field:nth-child(1) .input-error');
  const monthErrorMessage = document.querySelector('.input-field:nth-child(2) .input-error');
  const yearErrorMessage = document.querySelector('.input-field:nth-child(3) .input-error');

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var months31Days = daysInMonth[0, 2, 4, 6, 7, 9, 11];
  var months30Days = daysInMonth[3, 5, 8, 10];
  var maxDays = 0;

  var errorFlag = false;

  //For leap year
  if(inputYear % 4 == 0 && inputYear % 100 != 0 || inputYear % 400 == 0) {
    daysInMonth[1] = 29;
    dayToRed.style.color = '';
  }
  else {
    dayToRed.style.color = 'red';
  }
    
  //For 30days
  if(inputDay <= 0 || isNaN(inputDay) || inputDay > months30Days) {
    monthErrorMessage.style.display = 'block';
    dayToRed.style.color = 'red';
    errorFlag = true;
  }
  else {
    monthErrorMessage.style.display = 'none';
  }
  
  if (inputYear <= 0 || isNaN(inputYear) || inputYear > currentYear) {
    yearErrorMessage.style.display = 'block';
    yearToRed.style.color = 'red';
    errorFlag = true;
  }
  else {
    yearErrorMessage.style.display = 'none';
    yearToRed.style.color = '';
  }

  if (inputMonth <= 0 || isNaN(inputMonth) || inputMonth > 12) {
    monthErrorMessage.style.display = 'block';
    monthToRed.style.color = 'red';
    errorFlag = true;
  }
  else {
    monthErrorMessage.style.display = 'none';
    monthToRed.style.color = '';
  }
    maxDays = daysInMonth[inputMonth - 1];

  //For 31days
  
  if (inputDay <= 0 || isNaN(inputDay) || inputDay > maxDays || inputDay > months31Days) {
    dayErrorMessage.style.display = 'block';
    dayToRed.style.color = 'red';
    errorFlag = true;
  }
  else {
    dayErrorMessage.style.display = 'none';
    dayToRed.style.color = '';
  }

  if(inputDay > currentDay) {
    currentDay = currentDay + daysInMonth[currentMonth - 1];
    currentMonth = currentMonth - 1;
  }

  if(inputMonth > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }

  if(errorFlag) {
    var YearDiffInDays = "--";
    var MonthDiffInDays = "--";
    var DayDiff = "--";
  
  }
  else {
    var YearDiffInDays = Math.abs(currentYear - inputYear);
    var MonthDiffInDays = Math.abs(currentMonth - inputMonth);
    var DayDiff = Math.abs(currentDay - inputDay);
  }
  document.getElementById("result-year").textContent = YearDiffInDays;
  document.getElementById("result-month").textContent = MonthDiffInDays;
  document.getElementById("result-day").textContent = DayDiff;
}

