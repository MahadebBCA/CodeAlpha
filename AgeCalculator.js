// File: CodeAlpha/Agecalculator/script.js
const form = document.getElementById('ageForm');
const dobInput = document.getElementById('dob');
const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const dobValue = dobInput.value;
  if (!dobValue) {
    showResult("Please select a valid date.");
    return;
  }

  const dob = new Date(dobValue);
  const today = new Date();

  if (dob > today) {
    showResult("Date of Birth cannot be in the future!");
    return;
  }

  const age = calculateAge(dob, today);
  showResult(`🎉 Congratulations, You are ${age.years} years, ${age.months} months, and ${age.days} days old.`);
});

function calculateAge(dob, today) {
  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += daysInMonth(today.getMonth() - 1, today.getFullYear());
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

function showResult(message) {
  result.style.display = 'block';
  result.textContent = message;
}
