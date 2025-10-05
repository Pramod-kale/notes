(() => {


    function optimalStockTrading(prices: number[]): number {

        let lowestPrice = prices[0];
        prices.forEach(item => {
            if (item < lowestPrice) {
                lowestPrice = item;
            }
        });

        let highestPrice = prices.slice(lowestPrice)[0];
        prices.slice(lowestPrice).forEach(item => {
            if (item > highestPrice) {
                highestPrice = item;
            }
        });

        return highestPrice - lowestPrice;
    }
    // console.log(optimalStockTrading([6, 8, 1, 2, 30, 19])); // 29
    console.log(optimalStockTrading([4, 3, 2, 1])); // 0


})();