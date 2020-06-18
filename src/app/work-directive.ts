import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[work-host]',
})
export class workDirective{
    constructor(public viewContainerRef:ViewContainerRef){}
}