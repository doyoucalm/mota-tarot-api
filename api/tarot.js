import cards from '../data/cards.json';

export default function handler(req, res) {
  const randomIndex = Math.floor(Math.random() * cards.length);
  const card = cards[randomIndex];
  res.status(200).json(card);
}