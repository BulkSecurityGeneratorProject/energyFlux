import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'jhi-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.scss']
})
export class DashboardComponent {
  @ViewChild('regionList', { static: false }) regionList: any;
  constructor() {}

  scrollRight() {
    this.regionList.nativeElement.scrollLeft += window.innerWidth;
  }
}
