import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usdRate!: number;
  eurRate!: number;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.getCurrencyRates().subscribe(
      (data: any[]) => {
        const usdRate = data.find((item) => item.cc === 'USD');
        const eurRate = data.find((item) => item.cc === 'EUR');

        if (usdRate) {
          this.usdRate = Number(usdRate.rate.toFixed(2));
        }

        if (eurRate) {
          this.eurRate = Number(eurRate.rate.toFixed(2));
        }
      },
      (error) => {
        console.error('Помилка', error);
      }
    );
  }
}