import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  UserContainerComponent,
  UserListComponent,
  UserSingleComponent,
  UserDetailComponent,
  OrderContainerComponent,
  OrderSingleComponent,
  OrderDetailComponent,
  OrderListComponent,
} from '@components';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    UserListComponent,
    UserSingleComponent,
    UserDetailComponent,
    OrderContainerComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent,
  ],
  imports: [BrowserModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
