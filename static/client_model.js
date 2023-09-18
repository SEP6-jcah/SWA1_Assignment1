function weather_event( type, time, place, unit) {
  return {
    type,
    time,
    place,
    unit
  };
}

function weather_value(value) {
  return {
    value
  };
}

function weather_precipitation(precipitation_type) {
  return {
    precipitation_type
  };
}

function weather_wind_speed(directions) {
  return {
    directions: Array.isArray(directions) ? directions : [directions],
  };
}

function weather_interval(from, to){
  return{
    from,
    to
  };
}

function weather_forecast(weather_event, weather_interval, weather_wind_speed) {
  return {
    weather_event,
    weather_interval,
    ...(weather_event.type === "wind speed" ? { weather_wind_speed } : {}),
  };
}

function weather_data(weather_event, weather_interval, weather_wind_speed) {
  return {
    weather_event,
    weather_interval,
    ...(weather_event.type === "wind speed" ? { weather_wind_speed } : {}),
    ...(weather_event.type === "precipitation" ? { weather_precipitation } : {}),
  };
}



  

