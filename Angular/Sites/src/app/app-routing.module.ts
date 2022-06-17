import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent as premier} from './components/foodshop/container/container.component';

const routes: Routes =
[
  {
    path: 'premier',
    loadChildren: () =>
      import('./components/premium/container/module/premier').then(
        (m) => m.PremierModule )
  },
  {
    path: 'book',
    loadChildren: () =>
      import('./components/bookshop/container/module/book').then(
        (m) => m.BookModule)
  },
  {
    path: 'food',
    loadChildren: () =>
      import('./components/foodshop/container/module/food').then(
        (m) => m.FoodModule )
  },
  {
    path: 'security',
    loadChildren: () =>
      import('./components/cybersecurity/container/module/security').then(
        (m) => m.SecurityModule )
  },
  // { path: '', redirectTo: '/',pathMatch:'full' },
  { path: '**', component: premier }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
