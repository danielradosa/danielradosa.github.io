function getPriceAndShow() {
    // get current value of BTC in € from api
    fetch('https://api.coinbase.com/v2/prices/BTC-EUR/spot')
        .then(response => response.json()) 
        .then(data => {
            // get the price from the json
            var price = data.data.amount;
            // convert to float
            price = parseFloat(price);
            myBtc = 0.00412921;
            document.getElementById("btcPrice").innerHTML = price + " €";
            document.getElementById("myBtc").innerHTML = myBtc + " BTC";
            const fp = (price * myBtc).toString().slice(0, 5);
            document.getElementById("value").innerHTML = fp + " €";
        }
    );
}

getPriceAndShow();

// update every 10 seconds
setInterval(getPriceAndShow, 1000);
