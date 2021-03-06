import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'jhi-main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html'
})
export class JhiMainComponent implements OnInit {
  color = 'defaultdark';
  showSettings = false;
  showMinisidebar = false;
  showDarktheme = false;
  showRtl = false;

  public innerWidth: any;

  public config: PerfectScrollbarConfigInterface = {};

  constructor(public router: Router) {}

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['/dashboard']);
    }
    this.handleLayout();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.handleLayout();
  }

  toggleSidebar() {
    this.showMinisidebar = !this.showMinisidebar;
  }

  handleLayout() {
    this.innerWidth = window.innerWidth;
  }
}
