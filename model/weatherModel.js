const event = require('./weatherEvent.js')

function createWeatherData(value, type, unit) {
  Object.setPrototypeOf(this, event)
  const getValue = () => value
  const setValue = (_value) => value = _value
  const getType = () => type
  const getUnit = () => unit
  const setUnit = (_unit) => unit = _unit
  const toString = () => `${event.toString}\t${type}: ${value} ${unit}`
  const equals = (otherWeatherData) => event.equals(otherWeatherData) && value == otherWeatherData.getValue && type == otherWeatherData.getType && unit == otherWeatherData.getUnit

  return { ...event, getValue, setValue, getType, getUnit, setUnit, toString, equals }
}

function createTemperature(weatherData) {
  Object.setPrototypeOf(this, weatherData)
  const convertToF = () => {
    weatherData.setValue(weatherData.getValue()*(9/5)+32)
    weatherData.setUnit("F")
  }
  const convertToC = () => {
    weatherData.setValue(5/9(weatherData.getValue()-32))
    weatherData.setUnit("C")
  }
  const convert = () => {
    if(weatherData.getUnit() == "C") {
      convertToF
    }
    else {
      convertToC
    }
  }

  return { ...weatherData, convertToF, convertToC, convert}
}

function createPrecipitation (weatherData, precipitationType) {
  Object.setPrototypeOf(this, weatherData)

  const getPrecipitationType = () => precipitationType
  const convertToInches = () => {
    setValue(getValue()/25.4)
    setUnit("in")
  }
  const convertToMM = () => {
    setValue(getValue()*25.4)
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
  const toString = () => `${weatherData.toString}, ${precipitationType}`

  return { ...weatherData, getPrecipitationType, convertToInches, convertToMM, convert, toString }
}

function createWind(weatherData, direction) {
  Object.setPrototypeOf(this, weatherData)

  const getDirection = () => direction
  const convertToMPH = () => {
    weatherData.setValue(weatherData.getValue()*2.2369)
    weatherData.setUnit("mph")
  }
  const convertToMS = () => {
    weatherData.setValue(weatherData.getValue()/2.2369)
    weatherData.setUnit("m/s")
  }
  const convert = () => {
    if(weatherData.getUnit().toString() == "m/s") {
      convertToMPH()
    }
    else {
      convertToMS()
    }
  }
  const toString = () => `${weatherData.toString()}, ${direction}`

  return { ...weatherData, getDirection, convertToMPH, convertToMS, convert, toString }
}

function createCloudCoverage(weatherData) {
  Object.setPrototypeOf(this, weatherData)

  return { ...weatherData }
}