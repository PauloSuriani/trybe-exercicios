const fetch = require('node-fetch');

const coinCapFetch = async () => {
  const url = `https://api.coincap.io/v2/assets`;
  return fetch(url)
    .then((response) => response.json())
    .then((result) => result.data)
    .catch((error) => `something went wrong: ${error}`);
}

const getCoinsArray = async () => {
  const fetchResult = await coinCapFetch();
}

getCoinsArray();