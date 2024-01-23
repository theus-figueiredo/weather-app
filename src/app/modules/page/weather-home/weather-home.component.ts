import { WeatherData } from 'src/app/interfaces/weatherDataInterface';
import { WeatherService} from './../../service/weather-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['../../../../styles.scss']
})

export class WeatherHomeComponent implements OnInit, OnDestroy {

  public initialCityName = 'Rio de Janeiro';
  private readonly destroy$: Subject<void> = new Subject();
  weatherData!: WeatherData;
  searchIcon = faMagnifyingGlass;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.initialCityName);
  }

  getWeatherData(cityName: string): void {
    this.weatherService.getWeatherData(cityName).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {response && (this.weatherData = response); console.log(this.weatherData)},
      error: (error) => {console.log(error)},
    });
  }

  onSubmit(): void {
    this.getWeatherData(this.initialCityName);
    this.initialCityName = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
