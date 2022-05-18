import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {HomeComponent} from '../home.component'
 import { ListComponent } from '../list.component'
// import { DetailComponent } from '../detail/detail.component'

const routes: Routes = [
  { path: '', component: ListComponent, pathMatch: 'full' },
  // { path: 'list', component: ListComponent, pathMatch: 'full' },
  // { path: 'detail', component: DetailComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ListRoutingModule {}
