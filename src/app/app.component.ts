import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-share-humanity';
}



// const navSlide = () => {
//   const burger = document.querySelector('.burger');
//   const nav = document.querySelector('.nav-links');
//   const navLinks = document.querySelectorAll('.nav-links li');

//   // Toggle Nav

//   burger.addEventListener('click', () -> {

//     // Toggle Nav

//     nav.classList.toggle('nav-active');

//     // Animation Links

//     navLinks.forEach((link, index) => {
//       if (link.style.animation) {
//         link.style.animation = ''
//       } else {
//         link.style.animation = `navLink 0.5s ease forward ${index / 7 + 1.5}s`;
//       }
//     });

//     // Burger Animation

//     burger.classList.Toggle('toggle');

//   });
  
// }

// navSlide();
