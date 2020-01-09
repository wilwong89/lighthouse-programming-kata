let calculateChange = function(total, cash) {
  if (total > cash) return {};
  
  let remainingCash = cash - total;
  const numOfEachDenom = {};
  const validDenoms = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  };

  
  for (const key in validDenoms) {
    if (remainingCash > 0) {
      let denomNum = Math.floor(remainingCash / validDenoms[key]);
      remainingCash = remainingCash - (denomNum * validDenoms[key]);
      if (denomNum) numOfEachDenom[key] = denomNum;
    } else {
      break;
    }
  }

  return numOfEachDenom;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));