import * as React from 'react';
import './style.css';
import TemperatureConverter, { Kelvin, Fahrenheit } from './TemperatureConverter';

export default function App() {
  return (
    <TemperatureConverter
      renderKelvin={({ value }) => <Kelvin value={value} />}
      renderFanrenheit={({ value }) => <Fahrenheit value={value} />}
    />
  );
}
