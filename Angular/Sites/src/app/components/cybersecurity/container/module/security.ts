import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module'
import { ContainerComponent } from '../container.component';
import { NavComponent } from '../../nav/nav.component';
import { TitleComponent } from '../../title/title.component';
import { Main1Component } from '../../main1/main1.component';
import { Main2Component } from '../../main2/main2.component';
import { Main3Component } from '../../main3/main3.component';
import { Main4Component } from '../../main4/main4.component';
import { ContactsComponent } from '../../contacts/contacts.component';
import { FooterComponent } from '../../footer/footer.component';


@NgModule({
  declarations: [
    ContainerComponent,
    NavComponent,
    TitleComponent,
    Main1Component,
    Main2Component,
    Main3Component,
    Main4Component,ContactsComponent,
    FooterComponent,
  ],
  imports: [CommonModule, SecurityRoutingModule],
})
export class SecurityModule {}
