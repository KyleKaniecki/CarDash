import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../../../services/side-nav.service';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss']
})
export class BasePageComponent implements OnInit {

  constructor(private sidenavService: SideNavService) { }

  ngOnInit() {
  }

  closeSideNav() {
    if (this.sidenavService.sidenavStatus === 'open') {
      this.sidenavService.sidenavOpen = false;
    }
  }

}
