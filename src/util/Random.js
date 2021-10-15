
export default class Random {
  /**
   * Gets a random event from events state
   * @param {Array} events
   * @returns {Object} a random event
   */
  static selectEvent(events) {
    // type checking safety
    if (!Array.isArray(events)) {
      throw new TypeError(`selectEvent(): Received type ${events === null ? 'null' : typeof events}, expected an Array`);
    }

    const randomNumber = Math.floor(Math.random() * events.length);
    return events[randomNumber];
  }
}