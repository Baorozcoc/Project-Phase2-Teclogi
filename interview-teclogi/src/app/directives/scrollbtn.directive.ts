import { Directive, ElementRef, Input, OnChanges, Renderer2 } from "@angular/core";

@Directive({
    selector: '[scrollbtn]'
})
export class ScrollBtnDirective implements OnChanges{
    @Input("scrollbtn") reduceButton:boolean=false;

    constructor(private elRf: ElementRef, private renderer: Renderer2){}

    ngOnChanges(): void {
        if(this.reduceButton===true){
           this.renderer.setStyle(
                this.elRf.nativeElement, 'height', '75px'
            ) 
            this.renderer.setStyle(
                this.elRf.nativeElement, 'font-size', '8px'
            ) 
        }
        else{
            this.renderer.setStyle(
                this.elRf.nativeElement, 'height', '135px'
            );
            this.renderer.setStyle(
                this.elRf.nativeElement, 'font-size', '16px'
            ) 
        }
    }
}