export default function generateCards() {
  let id = 0;
  const cards = ['developer', 'htmlcss', 'java', 'jquery', 'jsjs', 'nodejs', 'reactjs', 'vuejs'
  ].reduce((accumulator, imgType) => {
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
  let randomised = [];
  let currentIndex = array.length, temporaryValue, randomIndex;
  for (let i = 0; i < array.length; i++) {
    randomIndex = Math.floor(Math.random() * (currentIndex + 1));
    temporaryValue = randomised[currentIndex];
    randomised[currentIndex] = randomised[randomIndex];
    randomised[randomIndex] = temporaryValue;

  }
  return randomised;
}

