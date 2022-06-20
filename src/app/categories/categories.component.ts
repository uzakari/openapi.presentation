import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../core/services/categories.service';
import { ICategories } from '../shared/icategories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories!: ICategories;
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories()
    .subscribe({ next: toReturn => this.categories = toReturn});
  }

}
