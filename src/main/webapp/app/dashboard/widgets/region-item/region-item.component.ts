import { Component, Input, Output, EventEmitter } from '@angular/core';
import { chartConfig } from './chart-config';

@Component({
  selector: 'region-item',
  templateUrl: './region-item.component.html',
  styleUrls: ['region-item.component.scss']
})
export class RegionItemComponent {
  @Input() chartData: number[];
  @Output() changeReg = new EventEmitter<number>();
  config: any = chartConfig;
  public lineChartData1: Array<any> = [{ data: [50, 130, 80, 70, 180, 105, 150], label: 'Sales' }];

  energyItemList = [
    {
      title: 'Hydro',
      value: '10.00kWh',
      background: '#33C'
    },
    {
      title: 'Solar',
      value: '14.20kWh',
      background: '#CC0'
    },
    {
      title: 'Bio',
      value: '44.50kWh',
      background: 'green'
    }
  ];
}
