import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { SidebarModule } from 'primeng/sidebar';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { WorkAreaComponent } from './work-area/work-area.component';
import { EjemploUnoComponent } from './ejemplo-uno/ejemplo-uno.component';
import { DragDropModule } from 'primeng/dragdrop';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainScreenComponent,
    WorkAreaComponent,
    EjemploUnoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    PanelModule,
    FieldsetModule,
    ButtonModule,
    SidebarModule,
    MegaMenuModule,
    MenubarModule,
    PanelMenuModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EjemploUnoComponent]
})
export class AppModule { }
