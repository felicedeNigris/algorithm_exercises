


'use strict'
const stocks = [10,7,5,8,11,9]

function getMaxProf(stocks){
  if(stocks.length < 2){
    throw new Error("Getting a profit requires at least 2 or more prices")
  }

  let minPrice = stocks[0];
  let maxProfit = stocks[1] - stocks[0];

  for (let i = 0; i < stocks.length; i++) {
      let currentPrice = stocks[i];

      // ensure min_price is the lowest price we've seen so far
      minPrice = Math.min(minPrice, currentPrice);
      // see what our profit would be if we bought at the
      // min price and sold at the current price
      let potentialProfit = currentPrice - minPrice;
      // update maxProfit if we can do better
      maxProfit = Math.max(maxProfit, potentialProfit);
  }
  return maxProfit
}
console.log(getMaxProf(stocks))
