const btc = document.getElementById('btc');
const eur = document.getElementById('eur');
const mybtc = document.getElementById('mybtc');
const rain = document.getElementById('rain');
const notrain = document.getElementById('notrain');
const btcHoldings = 0.00031131;
let btcPrice;

const fetchBtcPrice = async () => {
    const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    const data = await response.json();
    btcPrice = data.bitcoin.eur;

    btc.innerHTML = '€ ' + btcPrice.toLocaleString('en-US');
    eur.innerHTML = '€ ' + (btcPrice * btcHoldings).toFixed(2);
    mybtc.innerHTML = '₿ ' + btcHoldings;

    if ((btcPrice * btcHoldings).toFixed(2) > 10) {
        rain.style.display = 'block';
        notrain.style.display = 'none';
    } else {
        rain.style.display = 'none';
        notrain.style.display = 'block';
    }
};

fetchBtcPrice();
setInterval(fetchBtcPrice, 10000);
