const coinTableBody = document.getElementById('coin-table-body');
// const fetchButton = document.getElementById('fetch-button');
const searchInput = document.getElementById('search-input');
const sortMarketCapButton = document.getElementById('sort-market-cap-button');
const sortPercentageChangeButton = document.getElementById('sort-percentage-change-button');

let coinData = []; // Store the fetched data

// Fetch data using .then and render the table
// fetchButton.addEventListener('click', () => {
  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false') 
//   The above code can be used to fetch the api key 
    .then(response => response.json()) //Then can be used if it executes and it stored as json file
    .then(data => { // now we take the data's and we going to map it 
      coinData = data.map(item => ({ // we stored all the values in coin-data which is initially assigned as empty array 
        logo: item.image,
        name: item.name,
        id: item.symbol,
        currentPrice: item.current_price,
        marketCap: item.market_cap,
        percentageChange24h: item.market_cap_change_percentage_24h
      }));
      renderTable(coinData);// it can calls the render-Table function which includes coinData as arguments 
    })
    .catch(error => { //Can be used to catch the error
      console.error('Error:', error);
    });
// });

// Fetch data using async/await and render the table
async function fetchData() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
    const data = await response.json();

    coinData = data.map(item => ({
      logo: item.image,
      name: item.name,
      id: item.symbol,
      currentPrice: item.current_price,
      marketCap: item.market_cap,
      percentageChange24h: item.market_cap_change_percentage_24h
    }));
    renderTable(coinData);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Search functionality
searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.toLowerCase();
  const filteredData = coinData.filter(coin => coin.name.toLowerCase().includes(searchValue));
  renderTable(filteredData);
});

// Sort by Market Cap
sortMarketCapButton.addEventListener('click', () => {
  const sortedData = [...coinData].sort((a, b) => a.marketCap - b.marketCap);
  renderTable(sortedData);
});

// Sort by Percentage Change
sortPercentageChangeButton.addEventListener('click', () => {
  const sortedData = [...coinData].sort((a, b) => a.percentageChange24h - b.percentageChange24h);
  renderTable(sortedData);
});

// Render the table
function renderTable(data) {
  coinTableBody.innerHTML = '';

  data.forEach(item => {
    const row = document.createElement('tr');

    const logoCell = document.createElement('td');
    const logoImg = document.createElement('img');
    logoImg.src = item.logo;
    logoImg.alt = item.name;
    logoCell.appendChild(logoImg);
    row.appendChild(logoCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const idCell = document.createElement('td');
    idCell.textContent = item.id;
    row.appendChild(idCell);

    const currentPriceCell = document.createElement('td');
    currentPriceCell.textContent = item.currentPrice;
    row.appendChild(currentPriceCell);

    const marketCapCell = document.createElement('td');
    marketCapCell.textContent = item.marketCap;
    row.appendChild(marketCapCell);

    const percentageChange24hCell = document.createElement('td');
    percentageChange24hCell.textContent = item.percentageChange24h;
    row.appendChild(percentageChange24hCell);

    coinTableBody.appendChild(row);
  });
}
