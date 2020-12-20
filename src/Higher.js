function Higher(cards, count) {
  if (cards[count + 1] > cards[count]) {
    return true;
  } else {
    return false;
  }
}

export default Higher;
