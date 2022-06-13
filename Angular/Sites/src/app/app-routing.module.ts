import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent as food} from './components/foodshop/container/container.component';
import { ContainerComponent as book} from './components/bookshop/container/container.component';
import { ContainerComponent as premier} from './components/foodshop/container/container.component';
import { AppComponent} from './app.component'
import { of } from 'rxjs';
const routes: Routes = [
  // { path: '', component: AppComponent },
  {
    path: 'premier',
    loadChildren: () =>
      import('./components/premium/container/module/premier').then(
        (m) => m.PremierModule
      ),
  },
  {
    path: 'book',
    loadChildren: () =>
      import('./components/bookshop/container/module/book').then(
        (m) => m.BookModule
      ),
  },
  {
    path: 'food',
    loadChildren: () =>
      import('./components/foodshop/container/module/food').then(
        (m) => m.FoodModule
      ),
  },
  // { path: '', redirectTo: '/',pathMatch:'full' },
  { path: '**', component: premier },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
