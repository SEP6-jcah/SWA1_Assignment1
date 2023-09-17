function createEvent(time, place) {
  const getTime = () => time
  const getPlace = () => place
  const toString = () => `${place} [${time}]:\n`
  const equals = (otherEvent) => time == otherEvent.getTime && place == otherEvent.getPlace

  return { getTime, getPlace, toString, equals }
}

module.exports = {createEvent}