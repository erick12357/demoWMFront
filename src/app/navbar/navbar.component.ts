import { Component, OnInit } from '@angular/core';
import {MegaMenuItem, MenuItem} from 'primeng/api';
import { Input } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items:MegaMenuItem[];

  @Input() position:string;

  constructor() { }

  ngOnInit(): void {

    this.items = [{
      label: 'Videos', icon: 'pi pi-fw pi-video',
      items: [
          [
              {
                  label: 'Video 1',
                  items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
              },
              {
                  label: 'Video 2',
                  items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
              }
          ],
          [
              {
                  label: 'Video 3',
                  items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
              },
              {
                  label: 'Video 4',
                  items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
              }
          ]
      ]
    }];
  }

}
