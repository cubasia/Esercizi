import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityRoutingModule } from './activityrouting.module'
// import { ListComponent } from '../list/list.component';
// import { DetailComponent } from '../detail/detail.component';
import { MaterialModule } from 'src/app/module/components';
import { HomeComponent } from '../home.component'

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,

  ],
})
export class ActivityModule {}

