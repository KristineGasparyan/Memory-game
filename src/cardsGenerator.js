export default function generateCards() {
  let id = 0;

  const cards = ['developer', 'htmlcss', 'java', 'jquery', 'jsjs', 'nodejs', 'react', 'vuejs']
    .reduce((accumulator, imgType) => {
      accumulator.push({
        id: id++,
        imgType
      })
      accumulator.push({
        id: id++,
        imgType
      })
      return accumulator;
    }, [])
  return randomiseCards(cards);
}

function randomiseCards(array) {
  let randomised = array.slice(0);
  let temporaryValue, randomIndex;
  for (let i = 0; i < array.length - 1; i++) {
    randomIndex = Math.floor(Math.random() * (i + 1));
    temporaryValue = randomised[i];
    randomised[i] = randomised[randomIndex];
    randomised[randomIndex] = temporaryValue;
  }
  return randomised;
}

