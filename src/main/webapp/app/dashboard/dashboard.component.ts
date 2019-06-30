import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'jhi-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.scss']
})
export class DashboardComponent {
  @ViewChild('regionList', { static: false }) regionList: any;
  constructor() {}

  scrollHoriz(direction: number) {
    this.regionList.nativeElement.scrollLeft += direction * window.innerWidth;
  }
}
