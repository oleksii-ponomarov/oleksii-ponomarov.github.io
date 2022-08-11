'use strict';

(function init() {
  const ageElement = document.getElementById('age');
  if (ageElement) {
    const dateBorn = new Date(1990, 11, 6);
    const thisYear = new Date().getFullYear()
    const thisYearsBDayTime = new Date(dateBorn).setFullYear(thisYear);
    const absoluteYears = thisYear - dateBorn.getFullYear();
    const fullYears = thisYearsBDayTime - Date.now() < 0 ? absoluteYears : absoluteYears - 1
    ageElement.textContent = fullYears.toString()
  }
})()