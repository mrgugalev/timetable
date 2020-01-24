import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainInputComponent } from './modules/components/main-input/main-input.component';
import { TableComponent } from './modules/components/table/table.component';
import { TextAreaComponent } from './modules/components/text-area/text-area.component';

@NgModule({
  declarations: [
    AppComponent,
    MainInputComponent,
    TableComponent,
    TextAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
