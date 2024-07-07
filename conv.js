document.getElementById('convertButton').addEventListener('click', function() {
const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
const unitSelect = document.getElementById('unitSelect').value;
const resultDiv = document.getElementById('result');

if (isNaN(temperatureInput)) {
resultDiv.textContent = 'Please enter a valid number';
return;
}

let convertedTemperature, convertedUnit;

switch (unitSelect) {
case 'celsius':
convertedTemperature = (temperatureInput * 9/5) + 32;
convertedUnit = 'Fahrenheit';
break;
case 'fahrenheit':
convertedTemperature = (temperatureInput - 32) * 5/9;
convertedUnit = 'Celsius';
break;
case 'kelvin':
convertedTemperature = temperatureInput - 273.15;
convertedUnit = 'Celsius';
break;
}

resultDiv.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)}° ${convertedUnit}`;
});
