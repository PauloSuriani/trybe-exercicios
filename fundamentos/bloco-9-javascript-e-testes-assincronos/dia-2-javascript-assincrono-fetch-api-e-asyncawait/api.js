// const fetch = require('node-fetch');

const coinCapFetch = async () => {
  const url = `https://api.coincap.io/v2/assets`;
  return fetch(url)
    .then((response) => response.json())
    .then((result) => result.data)
    .catch((error) => `something went wrong: ${error}`);
}

const getCoinsArray = async () => {
  const fetchResult = await coinCapFetch();
  const coins = fetchResult;

  const coinsUl = document.querySelector('.cripto-list');

  coins.forEach((coin, index) => {
    if (index < 10){
      console.log(coin);
    const newElement = document.createElement('li');
    const usdPrice = Number(coin.priceUsd);

    newElement.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)} USD`;

    coinsUl.appendChild(newElement);}
  });
}

const setCoinsList = () => {

}
window.onload = () => getCoinsArray();
// console.log(getCoinsArray());