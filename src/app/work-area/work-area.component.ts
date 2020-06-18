import { AdItem } from './../AdItem';
import { AdDirective } from './../ad.directive';
import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ItemsServiceService } from '../items-service.service';
import { workDirective } from '../work-directive';

@Component({
  selector: 'app-work-area',
  templateUrl: './work-area.component.html',
  styleUrls: ['./work-area.component.css']
})
export class WorkAreaComponent implements OnInit {

  @ViewChild(workDirective, {static: true}) host:workDirective;
  items: AdItem[];

  constructor(private itemService: ItemsServiceService
    , private componentFactoryResolver: ComponentFactoryResolver
    , private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.load();
  }

  load():void{
    this.items = this.itemService.getItems();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.items[0].component);
    //const viewcContainerRef = this.host.viewContainerRef;
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory);
  }

  limpiar(): void{
    this.viewContainerRef.clear();
  }

  agregar(){
  this.viewContainerRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(this.items[0].component));
  }

}
