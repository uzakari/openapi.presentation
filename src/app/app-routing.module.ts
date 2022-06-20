import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: '/categories'},
  {path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)},
  {path:'people', loadChildren: () => import('./people/people.module').then(m => m.PeopleModule)},
  {path:'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule)},
  { path: '**', pathMatch: 'full', redirectTo: '/categories' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
