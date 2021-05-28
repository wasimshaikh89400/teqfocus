import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './Components/observable/observable.component';
import { FormDataComponent } from './Components/form-data/form-data.component';
import { TableDataComponent } from './Components/table-data/table-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    FormDataComponent,
    TableDataComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
