import { Directive, Input, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
    selector: '[appErrorImagSrc]'
})
export class ExeBackgroundDirective {
    private _defaultColor = 'yellow';

    @Input() appErrorImagSrc: string; // 输入属性，用于设置元素的背景颜色

    constructor(private elementRef: ElementRef, private renderer: Renderer) {
        this.setStyle(this._defaultColor);
    }

    @HostListener('error', ['$event.target'])
    onClick(e) { // 监听宿主元素的点击事件，设置元素背景色
        if (this.appErrorImagSrc) {
            e.src = this.appErrorImagSrc;
        } else {
            // tslint:disable-next-line:max-line-length
            e.src = './assets/img/other.jpg';
        }
    }

    private setStyle(color: string) { // 调用renderer对象提供的API设置元素的背景颜色
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'backgroundColor', color);
    }
}
