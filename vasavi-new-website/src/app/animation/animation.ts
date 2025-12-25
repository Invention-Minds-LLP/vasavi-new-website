import { Component, ElementRef, ViewChild } from '@angular/core';
import { Application } from '@splinetool/runtime';
@Component({
  selector: 'app-animation',
  imports: [],
  templateUrl: './animation.html',
  styleUrl: './animation.css',
})
export class Animation {

  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;

  private splineApp: any;

  ngAfterViewInit(): void {

    // if (window.innerWidth < 768) return;

    this.splineApp = new Application(this.canvas.nativeElement);
    this.splineApp.load(
      'https://prod.spline.design/sV3mm5nhyTuo0xf9/scene.splinecode'
    );

    // ✅ Pause animation when tab is hidden
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.splineApp?.stop?.();
      } else {
        this.splineApp?.play?.();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.splineApp) {
      this.splineApp.dispose();
    }
  }
}
