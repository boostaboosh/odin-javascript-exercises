let roundToOneDecimalPlace = function roundNumberToOneDecimalPlace ( number ) {
  return Math.round( number * 10 ) / 10;
}

const ftoc = function( fahrenheitTemperature ) {
  let temperatureInCelsiusScale = ( fahrenheitTemperature - 32 ) * ( 5 / 9 );
  
  return roundToOneDecimalPlace(temperatureInCelsiusScale);
};

const ctof = function( celsiusTemperature ) {
  let temperatureInFahrenheitScale = ( celsiusTemperature * ( 9 / 5 ) ) + 32;
  
  return roundToOneDecimalPlace(temperatureInFahrenheitScale);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
