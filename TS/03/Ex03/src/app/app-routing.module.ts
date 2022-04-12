import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserContainerComponent, OrderContainerComponent,NotFoundComponent } from '@components';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'users', component: UserContainerComponent },
  { path: 'orders', component: OrderContainerComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
