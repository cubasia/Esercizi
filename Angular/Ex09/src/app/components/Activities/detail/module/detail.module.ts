import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


 import { DetailComponent } from '../detail.component';
import { MaterialModule } from 'src/app/module/components';
import { DetailRoutingModule } from './detailrouting.module';


@NgModule({
  declarations: [DetailComponent],
  imports: [CommonModule, DetailRoutingModule, MaterialModule],
})
export class DetailModule {}
