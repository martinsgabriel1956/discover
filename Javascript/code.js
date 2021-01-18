function calculatePercentage(number, percentage) {
  const numbers = {
    number,
    percentage
  }

  const numberPercentage = (numbers.percentage / 100) * numbers.number;
  
  return numberPercentage;
}

console.log(calculatePercentage(500, 99));