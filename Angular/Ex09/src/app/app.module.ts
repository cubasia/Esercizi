import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { MaterialModule } from 'src/app/module/components';
 import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import { ToastrModule } from 'ngx-toastr';
// import { pricePipe } from 'src/app/pipe/pipePrezzo';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}



