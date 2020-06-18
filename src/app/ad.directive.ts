import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[dync-content]'
})
export class AdDirective{
    constructor(public containerRef:ViewContainerRef){
    }  

    
    getContainer():ViewContainerRef{
        return this.containerRef;
    }
}