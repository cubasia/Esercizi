import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {
  UserContainerComponent, UserListComponent, UserSingleComponent, UserDetailComponent,
  OrderContainerComponent,  OrderSingleComponent,  OrderDetailComponent,  OrderListComponent} from '@components';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './module/materials';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './component/not-found/not-found.component';
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
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,
  MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
