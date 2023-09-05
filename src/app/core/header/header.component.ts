import { Component } from '@angular/core';
import { BioService } from '../services/bio.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  bio$ = this.bioService.getBio();
  isHome$ = this.headerService.isHome();

  menuItems = [
    { title: 'About Me', homePath: '/', fragment: 'about', pagePath: '/about' },
    { title: 'My Blog', homePath: '/blog', fragment: '', pagePath: '/blog' },
    { title: 'Login', homePath: '/login', fragment: '', pagePath: '/login' },
    { title: 'Register', homePath: '/register', fragment: '', pagePath: '/register' }
  ];

  constructor(private bioService: BioService, private headerService: HeaderService) { }
}