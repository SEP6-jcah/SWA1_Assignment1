export default model => {
  let temperature = model.temperature
  let precipitation = model.precipitation
  let wind = model.wind
  let cloud = model.cloud

  return { temperature, precipitation, wind, cloud }
}