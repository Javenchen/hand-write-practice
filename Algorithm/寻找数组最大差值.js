var arr=[1,2,3,4,5,6,7,8,9]


function getMaxProfit(arr) {
 
    var minPrice = arr[0];
    var maxProfit = 0;
 
    for (var i = 0; i < arr.length; i++) {
        var currentPrice = arr[i];
        minPrice = Math.min(minPrice, currentPrice);
        var potentialProfit = currentPrice - minPrice;
        maxProfit = Math.max(maxProfit, potentialProfit);
    }
    return maxProfit;
}


console.log(getMaxProfit(arr))