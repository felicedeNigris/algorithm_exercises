//This is running in O(n^2) time with 2 for loops

'use strict'
const stocks = [10,7,5,8,11,9]

function getMaxProfit(stocks){
  let maxProfit = 0

  //go through every price & time
  for(let earlyTime = 0; earlyTime < stocks.length; earlyTime++){
    let earlyPrice = stocks[earlyTime];

    //go through all the later prices
    for(let lateTime = 0; lateTime < stocks.length; lateTime++){
      let latePrice = stocks[lateTime]

      //see profit if we buy at minprice and sell at current price
      let possProfit = latePrice - earlyPrice

      //update maxProfit : to see the best profit
      //this will compare (0,possProfit) in the loop
      maxProfit = Math.max(maxProfit, possProfit)
    }
  }//end loops
return maxProfit
}

console.log(getMaxProfit(stocks))
