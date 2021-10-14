
class Random {
  /**
   * Gets a random event from events state
   * @param {Array} events
   * @returns {Object} a random event
   */
  static selectEvent(events) {
    const randomNumber = Math.floor(Math.random() * events.length);

    return events[randomNumber];
  }
}