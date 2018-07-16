import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../../../services/side-nav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private sidenavService: SideNavService, private router: Router) { }

  ngOnInit() {
  }

  goToLink(link: any[]) {
    this.router.navigate(link);
    this.sidenavService.sidenavOpen = false;
  }

  get opened() {
    return this.sidenavService.sidenavOpen$;
  }

}
