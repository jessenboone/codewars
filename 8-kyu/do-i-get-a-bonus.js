function bonusTime(salary, bonus) {
if (bonus === true) {
  salary *= 10;
  return '£' + salary;
} else {
  return '£' + salary;
  }
}

bonusTime(5000, true)
