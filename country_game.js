const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Country data
const countries = [
  { name: "Australia", lat: -25.2744, lon: 133.7751 },
  { name: "Brazil", lat: -14.2350, lon: -51.9253 },
  { name: "Canada", lat: 56.1304, lon: -106.3468 },
  { name: "China", lat: 35.8617, lon: 104.1954 },
  { name: "France", lat: 46.2276, lon: 2.2137 },
  { name: "Germany", lat: 51.1657, lon: 10.4515 },
  { name: "India", lat: 20.5937, lon: 78.9629 },
  { name: "Italy", lat: 41.8719, lon: 12.5675 },
  { name: "Japan", lat: 36.2048, lon: 138.2529 },
  { name: "Mexico", lat: 23.6345, lon: -102.5528 },
  { name: "Nigeria", lat: 9.0820, lon: 8.6753 },
  { name: "Russia", lat: 61.5240, lon: 105.3188 },
  { name: "South Africa", lat: -30.5595, lon: 22.9375 },
  { name: "Spain", lat: 40.4637, lon: -3.7492 },
  { name: "United Kingdom", lat: 55.3781, lon: -3.4360 },
  { name: "United States", lat: 37.0902, lon: -95.7129 }
];

// Game state
let score = 0;
let currentCountry = null;

// Initialize game
initGame();

function initGame() {
  // Reset score
  score = 0;

  // Pick a random country
  currentCountry = countries[Math.floor(Math.random() * countries.length)];

  // Draw map
  drawMap();

  // Display score
  updateScore();
}

function drawMap() {
  // Draw background
  ctx.fillStyle = "#f2f2f2";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw country
  const x = (currentCountry.lon + 180) * (canvas.width / 360);
  const y = (canvas.height / 2) - (currentCountry.lat * (canvas.height / 180));
  ctx.beginPath();
  ctx.fillStyle = "
