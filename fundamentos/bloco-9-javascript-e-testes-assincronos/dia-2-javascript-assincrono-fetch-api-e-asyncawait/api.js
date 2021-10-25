const fetch = require('node-fetch');

const coinCapFetch = async () => {
  const url = `https://api.coincap.io/v2/assets`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => `something went wrong: ${error}`);
}

coinCapFetch();