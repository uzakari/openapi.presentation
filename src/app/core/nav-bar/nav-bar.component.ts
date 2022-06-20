import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent implements OnInit {


  isCollapsed: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
