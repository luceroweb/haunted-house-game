
export default class Random {
  /**
   * Gets a random event from events state
   * @param {Array} events
   * @returns {Object} a random event
   * call selectEvent and pass the events state. ex: Random.selectEvent(events)
   */
  static selectEvent(events) {
    // type checking safety
    if (!Array.isArray(events)) {
      throw new TypeError(`selectEvent(): Received type ${events === null ? 'null' : typeof events}, expected an Array`);
    }

    const randomNumber = Math.floor(Math.random() * events.length);
    return events[randomNumber];
  }

/**
 * Gets exclusive random elements from an array
 * @param {Array} list
 * @param {number} amount
 * @return {Array}
 * call this function by passsing an array and the number of random elements you want back.
 * ex: Random.selectRandomElements(myList, 2) will return an array of two random elements from myList
 */
  static selectRandomElements(list, amount) {
  // limit amount to list length 
  if (amount > list.length) {
    amount -= (amount - list.length)
  }
  const random = max => Math.floor(Math.random() * max);

  const maxStartIndex = list.length - amount;
  const randomStartIndex = random(maxStartIndex + 1); // +1 because of how slice works
  const endIndex = randomStartIndex + amount;
  const randomList = list.slice(randomStartIndex, endIndex);

  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/2450976#2450976
  for (let i = randomList.length - 1; i >= 0; --i) {
    const randomIndex = random(i);
    // [ randomList[i], randomList[randomIndex] ] = [ randomList[randomIndex], randomList[i] ];
    const tmp = randomList[i];
    randomList[i] = randomList[randomIndex];
    randomList[randomIndex] = tmp;
  }
  return randomList;
  }
}


