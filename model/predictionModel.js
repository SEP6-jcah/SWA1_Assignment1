const event = require('./weatherEvent.js')

function createWeatherPrediction(max, min, type, unit) {
  Object.setPrototypeOf(this, event)

  const matches = (otherPrediction) => {
    event.equals(otherPrediction.event) 
    && (min <= otherPrediction.weatherData.getValue >= max) 
    && type == otherPrediction.getType 
    && unit == otherPrediction.getUnit
  }
  const getMax = () => max
  const setMax = (_max) => max = _max
  const getMin = () => min
  const setMin = (_min) => min = _min
  const getType = () => type
  const getUnit = () => unit
  const setUnit = (_unit) => unit = _unit
  const toString = () => `${event.toString}\t${type}: ${min}-${max} ${unit}`

  return { ...event, matches, getMax, setMax, getMin, setMin, getType, getUnit, setUnit, toString }
}

function createTemperaturePrediction(weatherPrediction) {
  Object.setPrototypeOf(this, weatherPrediction)
  
  const convertToF = () => {
    weatherPrediction.setMax(weatherPrediction.getMax()*(9/5)+32)
    weatherPrediction.setMin(weatherPrediction.getMin()*(9/5)+32)
    weatherPrediction.setUnit("F")
  }
  const convertToC = () => {
    weatherPrediction.setMax(5/9(weatherPrediction.getMax()-32))
    weatherPrediction.setMin(5/9(weatherPrediction.getMin()-32))
    weatherPrediction.setUnit("C")
  }
  const convert = () => {
    if(weatherPrediction.getUnit() == "C") {
      convertToF
    }
    else {
      convertToC
    }
  }

  return { ...weatherPrediction, convertToF, convertToC, convert}
}

function createPrecipitationPrediction (weatherPrediction, expectedPrecipitationTypes) {
  Object.setPrototypeOf(this, weatherPrediction)

  const getExpectedPrecipitationTypes = () => expectedPrecipitationTypes
  const convertToInches = () => {
    setMax(getMax()/25.4)
    setMin(getMin()/25.4)
    setUnit("in")
  }
  const convertToMM = () => {
    setMax(getMax()*25.4)
    setMin(getMin()*25.4)
    setUnit("mm")
  }
  const convert = () => {
    if(getUnit == "mm") {
      convertToInches
    }
    else {
      convertToMM
    }
  }
  const toString = () => `${weatherPrediction.toString}, ${expectedPrecipitationTypes}`

  return { ...weatherPrediction, getExpectedPrecipitationTypes, convertToInches, convertToMM, convert, toString }
}

function createWindPrediction(weatherPrediction, expectedDirections) {
  Object.setPrototypeOf(this, weatherPrediction)

  const getExpectedDirections = () => expectedDirections
  const convertToMPH = () => {
    weatherPrediction.setMax(weatherPrediction.getMax()*2.2369)
    weatherPrediction.setMin(weatherPrediction.getMin()*2.2369)
    weatherPrediction.setUnit("mph")
  }
  const convertToMS = () => {
    weatherPrediction.setMax(weatherPrediction.getMax()/2.2369)
    weatherPrediction.setMin(weatherPrediction.getMin()/2.2369)
    weatherPrediction.setUnit("m/s")
  }
  const convert = () => {
    if(weatherPrediction.getUnit().toString() == "m/s") {
      convertToMPH()
    }
    else {
      convertToMS()
    }
  }
  const toString = () => `${weatherPrediction.toString()}, [${expectedDirections}]`

  return { ...weatherPrediction, getExpectedDirections, convertToMPH, convertToMS, convert, toString }
}

function createCloudCoveragePrediction(weatherPrediction) {
  Object.setPrototypeOf(this, weatherPrediction)

  return { ...weatherPrediction }
}

module.exports = {createWeatherPrediction, createTemperaturePrediction, createPrecipitationPrediction, createWindPrediction, createCloudCoveragePrediction}