import { WeatherData } from 'src/app/interfaces/weatherDataInterface';
import { WeatherService} from './../../service/weather-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['../../../../styles.scss']
})

export class WeatherHomeComponent implements OnInit {
  private initialCityName = 'Rio de Janeiro';
  weatherData!: WeatherData;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.initialCityName);
  }

  getWeatherData(cityName: string): void {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {response && (this.weatherData = response); console.log(this.weatherData)},
      error: (error) => {console.log(error)},
    });
  }
}
