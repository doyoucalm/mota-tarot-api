import cards from '../../data/cards.json';

export default function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://themota.id/');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Draw card logic
  const randomIndex = Math.floor(Math.random() * cards.length);
  const card = cards[randomIndex];
  res.status(200).json(card);
}
