import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module'
import { ContainerComponent } from '../container.component';
import { MainComponent } from '../../main/main.component'
import { NewComponent } from '../../new/new.component'
import {NavComponent } from '../../nav/nav.component'
import { NewsComponent } from '../../news/news.component'
import { ProductComponent } from '../../product/product.component'
import { ShopComponent } from '../../shop/shop.component'
import { AboutComponent } from '../../about/about.component'
import { AppleComponent } from '../../apple/apple.component'
import { ContactComponent } from '../../contact/contact.component'



@NgModule({
  declarations: [ContainerComponent, MainComponent, NewComponent, NavComponent,
  NewsComponent,ProductComponent,ShopComponent,AboutComponent,AppleComponent,ContactComponent],
  imports: [CommonModule, FoodRoutingModule]

})
export class FoodModule {}
