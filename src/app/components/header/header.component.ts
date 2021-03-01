import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }


}

// navSlide = () => {
//   const hamburger = document.querySelector('.hamburger');
//   const nav = document.querySelector('.nav-links');

//   hamburger.addEventListener('click', () => {
//     nav.classList.toggle('nav-active');
//   });
// }
// navSlide();
