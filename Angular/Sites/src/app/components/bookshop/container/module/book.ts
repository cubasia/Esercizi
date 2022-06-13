import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module'
import { ContainerComponent } from '../container.component';
import { FooterComponent } from '../../footer/footer.component'
import { HeaderComponent } from '../../header/header.component'
import { MainComponent } from '../../main/main.component'
import { Main2Component } from '../../main2/main2.component'



@NgModule({
  declarations: [ContainerComponent, FooterComponent, HeaderComponent, MainComponent,
  Main2Component],
  imports: [CommonModule, BookRoutingModule]

})
export class BookModule {}
