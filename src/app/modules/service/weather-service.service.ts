import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<any> {
    return this.http.get(`${environment.apiUlr}?q=${cityName}&units=metric&mode=json&appid=${environment.apiKey}`, {});
  }
}
