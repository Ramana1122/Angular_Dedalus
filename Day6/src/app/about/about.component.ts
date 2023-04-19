import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('slideshow') slideshow!: ElementRef;
  images = ["http://localhost/tiger1.png","http://localhost/111.jpg","http://localhost/113.jpg"];
  currentIndex = 0;
  ngOnInit(): void {
    setInterval(() => {
      this.slideshow.nativeElement.src = this.images[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 2000);
  }
}

