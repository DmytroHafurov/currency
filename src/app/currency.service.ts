import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

  constructor(private http: HttpClient) { }

  getCurrencyRates() {
    return this.http.get<any[]>(this.apiUrl);
  }
}