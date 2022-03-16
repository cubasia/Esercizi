import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserContainerComponent } from './component/user-container/user-container.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserSingleComponent } from './component/user-single/user-single.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';
import { OrderContainerComponent } from './component/order-container/order-container.component';
import { OrderListComponent } from './component/order-list/order-list.component';
import { OrderSingleComponent } from './component/order-single/order-single.component';
import { OrderDetailComponent } from './component/order-detail/order-detail.component';

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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
