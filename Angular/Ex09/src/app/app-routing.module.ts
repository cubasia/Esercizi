import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Activities/home/home.component';

const routes: Routes = [
  {
    path: 'show',
    loadChildren: () =>
      import('./components/show-counter/Module/show-counter.module').then(
        (m) => m.ShowCounterModule
      ),
  },
  {
    path: 'edit',
    loadChildren: () =>
      import('./components/edit-counter/Module/edit-counter.module').then(
        (m) => m.EditCounterModule
      ),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./components/shop/Module/shop-counter.module').then(
        (m) => m.ShopCounterModule
      ),
  },
  {
    path: 'api',
    loadChildren: () =>
      import('./components/show-api/module/show-api.module').then(
        (m) => m.ApiModule
      ),
  },
  {
    path: 'joke',
    loadChildren: () =>
      import('./components/joke-container/module/joke.module').then(
        (m) => m.JokeModule
      ),
  },
  {
    path: 'pokemone',
    loadChildren: () =>
      import('./components/pokemon-container/module/pokemone.module').then(
        (m) => m.PokemoneModule
      ),
  },
  {
    path: 'activity',
    loadChildren: () =>
      import('./components/Activities/home/module/activity.module').then(
        (m) => m.ActivityModule    ),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./components/Activities/list/module/list.module').then(
        (m) => m.ListModule    ),
  },
  {
    path: 'list/:number',
    loadChildren: () =>
      import('./components/Activities/detail/module/detail.module').then(
        (m) => m.DetailModule   ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
