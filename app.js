'use strict';

var button = document.getElementById('calculate-button');
button.addEventListener('click', calculateAge);

function calculateAge() {
  var currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1;
  let currentDay = currentDate.getDate();

  var inputYear = parseFloat(document.getElementById('year-input').value);
  var inputMonth = parseFloat(document.getElementById('month-input').value);
  var inputDay = parseFloat(document.getElementById('day-input').value);
   
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
    }else {
      dayToRed.style.color = 'red';
    }

   //For 30days
  if(inputDay < 0 || isNaN(inputDay) || inputDay > months30Days) {
    errorFlag = true;
    monthErrorMessage.style.display = 'block';
    dayToRed.style.color = 'red';
  }else {
    monthErrorMessage.style.display = 'none';
  }  

  if (inputYear < 0 || isNaN(inputYear) || inputYear > currentYear) {
    errorFlag = true;
    yearErrorMessage.style.display = 'block';
    yearToRed.style.color = 'red';
  }else {
      yearErrorMessage.style.display = 'none';
      yearToRed.style.color = '';
    }

  if (inputMonth < 0 || isNaN(inputMonth) || inputMonth > 12) {
    errorFlag = true;
    monthErrorMessage.style.display = 'block';
    monthToRed.style.color = 'red';
  }else {
      monthErrorMessage.style.display = 'none';
      monthToRed.style.color = '';
    }
    maxDays = daysInMonth[inputMonth-1];

  //For 31days
  if (inputDay < 0 || isNaN(inputDay) || inputDay > maxDays || inputDay > months31Days) {
    errorFlag = true;
    dayErrorMessage.style.display = 'block';
    dayToRed.style.color = 'red';
  }else  {
      dayErrorMessage.style.display = 'none';
      dayToRed.style.color = '';
    }

  if(errorFlag) {
    var YearDiffInDays = '--';
    var MonthDiffInDays = '--';
    var DayDiff = '--';
    return;
  }else {
    var YearDiffInDays = Math.abs((currentYear - inputYear));
    var MonthDiffInDays = Math.abs((currentMonth - inputMonth));
    var DayDiff = Math.abs(currentDay - inputDay);
  }
  document.getElementById('result-year').textContent = YearDiffInDays;
  document.getElementById('result-month').textContent = MonthDiffInDays
  document.getElementById('result-day').textContent = DayDiff;
}
 

