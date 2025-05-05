export default function handler(req, res) {
  // ✅ CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // ✅ Preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // ✅ Major Arcana
  const cards = [
    { id: 'the-fool', name: 'The Fool', description: 'A new beginning, adventure, and potential.', image: '/cards/the-fool.jpg' },
    { id: 'the-magician', name: 'The Magician', description: 'Manifestation, resourcefulness, power.', image: '/cards/the-magician.jpg' },
    { id: 'the-high-priestess', name: 'The High Priestess', description: 'Intuition, unconscious, inner voice.', image: '/cards/the-high-priestess.jpg' },
    { id: 'the-empress', name: 'The Empress', description: 'Abundance, nurturing, fertility.', image: '/cards/the-empress.jpg' },
    { id: 'the-emperor', name: 'The Emperor', description: 'Authority, structure, control.', image: '/cards/the-emperor.jpg' },
    { id: 'the-hierophant', name: 'The Hierophant', description: 'Tradition, conformity, morality.', image: '/cards/the-hierophant.jpg' },
    { id: 'the-lovers', name: 'The Lovers', description: 'Love, harmony, relationships.', image: '/cards/the-lovers.jpg' },
    { id: 'the-chariot', name: 'The Chariot', description: 'Willpower, victory, determination.', image: '/cards/the-chariot.jpg' },
    { id: 'strength', name: 'Strength', description: 'Courage, persuasion, inner strength.', image: '/cards/strength.jpg' },
    { id: 'the-hermit', name: 'The Hermit', description: 'Soul-searching, solitude, wisdom.', image: '/cards/the-hermit.jpg' },
    { id: 'wheel-of-fortune', name: 'Wheel of Fortune', description: 'Change, cycles, fate.', image: '/cards/wheel-of-fortune.jpg' },
    { id: 'justice', name: 'Justice', description: 'Fairness, truth, law.', image: '/cards/justice.jpg' },
    { id: 'the-hanged-man', name: 'The Hanged Man', description: 'Pause, surrender, new perspective.', image: '/cards/the-hanged-man.jpg' },
    { id: 'death', name: 'Death', description: 'Endings, transformation, transition.', image: '/cards/death.jpg' },
    { id: 'temperance', name: 'Temperance', description: 'Balance, moderation, purpose.', image: '/cards/temperance.jpg' },
    { id: 'the-devil', name: 'The Devil', description: 'Addiction, materialism, playfulness.', image: '/cards/the-devil.jpg' },
    { id: 'the-tower', name: 'The Tower', description: 'Sudden change, upheaval, chaos.', image: '/cards/the-tower.jpg' },
    { id: 'the-star', name: 'The Star', description: 'Hope, faith, renewal.', image: '/cards/the-star.jpg' },
    { id: 'the-moon', name: 'The Moon', description: 'Illusion, fear, subconscious.', image: '/cards/the-moon.jpg' },
    { id: 'the-sun', name: 'The Sun', description: 'Joy, success, vitality.', image: '/cards/the-sun.jpg' },
    { id: 'judgement', name: 'Judgement', description: 'Rebirth, inner calling, absolution.', image: '/cards/judgement.jpg' },
    { id: 'the-world', name: 'The World', description: 'Completion, travel, achievement.', image: '/cards/the-world.jpg' },
  ];

  // ✅ Draw Random Card
  const randomIndex = Math.floor(Math.random() * cards.length);
  const card = cards[randomIndex];

  res.status(200).json(card);
}
