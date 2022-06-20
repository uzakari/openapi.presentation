import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoriesAltComponent } from './categories-alt/categories-alt.component';
import { CategoriesDetailComponent } from './categories-alt/categories-detail.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesAltComponent,
    CategoriesDetailComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
