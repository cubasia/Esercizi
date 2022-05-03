import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ShowCounterComponent } from './components/show-counter/show-counter.component';
//import { EditCounterComponent } from './components/edit-counter/edit-counter.component';
//import { ShopComponent } from './components/shop/shop.component';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { MaterialModule } from 'src/app/module/components';
//import { ShowApiComponent } from './components/show-api/show-api.component';
// import { ShowJokeComponent } from './components/joke-container/show-joke/show-joke.component';
// import { JokeContainerComponent } from './components/joke-container/joke-container.component';
// import { ShowJokedislikeComponent } from './components/joke-container/show-jokedislike/show-jokedislike.component';


@NgModule({
  declarations: [
    AppComponent,
  //ShowCounterComponent,
  //EditCounterComponent,
  //  ShopComponent,
  //  ShowApiComponent,
  // ShowJokeComponent,
  // JokeContainerComponent,
  // ShowJokedislikeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   MaterialModule,
    //FormsModule,
    //ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}



