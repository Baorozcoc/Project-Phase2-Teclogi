import { Directive, ElementRef, Input,  OnChanges,  Renderer2 } from "@angular/core";

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective implements OnChanges{
    @Input("highlight") savings:number=0.1;

    constructor(private elRf: ElementRef, private renderer: Renderer2){}

    ngOnChanges(): void {
        if(this.savings>=0.8){
            this.renderer.setAttribute(
                this.elRf.nativeElement, 'src', "../../../assets/icons8-enamorado-50.png"
            )
        }
       else if(this.savings>=0.5){
            this.renderer.setAttribute(
                this.elRf.nativeElement, 'src', "../../../assets/icons8-feliz-50.png"
            )
       }
       else{
            this.renderer.setAttribute(
                this.elRf.nativeElement, 'src', "../../../assets/icons8-triste-50.png"
            )
       }
    }
}