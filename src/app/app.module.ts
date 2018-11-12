import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { csLocale } from 'ngx-bootstrap/locale';
defineLocale('cs', csLocale);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
