import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnChanges {
  @Input() usdRate!: number;
  @Input() eurRate!: number;

  amount: number = 0;
  fromCurrency: string = 'Выберите валюту';
  toCurrency: string = 'Выберите валюту';
  defaultCurrency: string = 'Выберите валюту';

  conversionRates: { [key: string]: number } = {
    UAH: 1, // Курс гривны к гривне (1 UAH = 1 UAH)
    USD: 0,
    EUR: 0,
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes["usdRate"]) {
      this.conversionRates["USD"] = this.usdRate;
    }

    if (changes["eurRate"]) {
      this.conversionRates["EUR"] = this.eurRate;
    }
  }

  convertFromAmount() {
    const convertedAmount = this.amount / this.conversionRates[this.fromCurrency] * this.conversionRates[this.toCurrency];
    return convertedAmount.toFixed(2);
  }

  convertToAmount() {
    const convertedAmount = this.amount / this.conversionRates[this.toCurrency] * this.conversionRates[this.fromCurrency];
    return convertedAmount.toFixed(2);
  }

  getFlagImageUrl(currency: string): string {
    // Здесь вы можете определить логику для получения URL-ссылки на изображение флага в зависимости от выбранной валюты
    if (currency === 'UAH') {
      return 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg';
    } else if (currency === 'USD') {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/1280px-Flag_of_the_United_States_%28Pantone%29.svg.png';
    } else if (currency === 'EUR') {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1280px-Flag_of_Europe.svg.png';
    } else {
      return 'url-to-default-flag-image';
    }
  }
}