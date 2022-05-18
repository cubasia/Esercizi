import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './listrouting.module';
;
// import { DetailComponent } from '../detail/detail.component';
import { MaterialModule } from 'src/app/module/components';
import { ListComponent } from '../list.component';
import { pricePipe } from '../../../../pipe/pipePrezzo'
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [ListComponent,pricePipe],
  imports: [CommonModule, ListRoutingModule, MaterialModule],
})
export class ListModule {}
