import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from  '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { BaseComponent } from './base/base.component';
import { UserComponent } from './user/user.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import UserServices from './services/UserServices';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BaseComponent,
    UserComponent,
    BookFlightComponent,
    AdminloginComponent,
    AddAirlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [UserServices],
  bootstrap: [BaseComponent]
})
export class AppModule { }
