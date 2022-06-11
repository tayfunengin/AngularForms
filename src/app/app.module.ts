import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormTdComponent } from './form-td/form-td.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import HoverDirective from './shared/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    FormTdComponent,
    FormReactiveComponent,
    ErrorPageComponent,
    HomeComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
