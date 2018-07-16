import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../../../services/side-nav.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private sidenavService: SideNavService) { }

  ngOnInit() {
  }

  toggleSidenav() {
    console.log('hello');
    
    this.sidenavService.sidenavOpen = this.sidenavService.sidenavStatus === 'open' ? false : true;
  }

}
