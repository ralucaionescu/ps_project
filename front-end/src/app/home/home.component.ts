import { Component, OnInit } from '@angular/core';
import gsap from 'gsap/all';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.animation();
  }

  animation() {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to('.text', { y: "0%", duration: 2, stagger: 0.5 });
    tl.to('.slider', { y: "-100%", duration: 1.5, delay: 0.5 });
    tl.to('.intro', { y: "-100%", duration: 1 }, "-=1");
    tl.fromTo('.big-text', { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo('.big-text2', { opacity: 0 }, { opacity: 1, duration: 1 });
  }

}
