import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apikey = 'b092197c395fe459ca26c9fc01914f6a';

  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<any> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apikey}`, {});
    // return this.http.get(
    //   `api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${this.apikey}`
    // );
  }
}
