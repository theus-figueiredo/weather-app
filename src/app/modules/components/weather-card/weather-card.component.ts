import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/interfaces/weatherDataInterface';

import {
  faCloud,
  faCloudRain,
  faDroplet,
  faSun,
  faTemperatureHalf,
  faTemperatureHigh,
  faTemperatureLow,
  faWind } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['../../../../styles.scss']
})
export class WeatherCardComponent {
  @Input() weatherData! : WeatherData;

  minTempIcon = faTemperatureLow
  maxTempIcon = faTemperatureHigh
  humidityIcon = faDroplet
  windIcon = faWind
  feelsLikeIcon = faTemperatureHalf
  sunnyIcon = faSun
  rainyIcon = faCloudRain
  cloudyIcon = faCloud
}
