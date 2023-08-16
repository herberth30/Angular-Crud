import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HeaderAlertComponentComponent } from './header-alert-component/header-alert-component.component';
import { CreateDataFormComponentComponent } from './create-data-form-component/create-data-form-component.component';
import { ReadUpdateDataComponentComponent } from './read-update-data-component/read-update-data-component.component';

@NgModule({
  declarations: [
    AppComponent,
  
    HeaderAlertComponentComponent,
    CreateDataFormComponentComponent,
    ReadUpdateDataComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CreateDataFormComponentComponent,
    HeaderAlertComponentComponent,
    ReadUpdateDataComponentComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
