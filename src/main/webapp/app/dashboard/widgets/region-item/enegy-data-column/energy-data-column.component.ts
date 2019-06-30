import { Component, Input } from '@angular/core';
import { EnergyDataItem } from './energy-data-item.model';

@Component({
  selector: 'energy-data-column',
  templateUrl: './energy-data-column.component.html',
  styleUrls: ['energy-data-column.component.scss']
})
export class EnergyDataColumnComponent {
  @Input() itemList: EnergyDataItem[];
}
