import { Component, Input, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { ICategories } from 'src/app/shared/icategories';

@Component({
  selector: 'app-categories-alt',
  templateUrl: './categories-alt.component.html',
  styleUrls: ['./categories-alt.component.css'],
})
export class CategoriesAltComponent implements OnInit {
  pageTitle = 'Categories';
  @Input() categoriesInput: ICategories = { categories: [] };

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {}

  categoryDetail$ = this.categoriesService.categoryDetailAction.pipe(
    map((x) => ({
      Name: x?.categories[0]
     })
    )
  );

  onSelected(categoryName: string) {
    console.log(`category name ${categoryName}`);

    this.categoriesService.getCategoriesDetails(categoryName).subscribe({
      next: (toReturn) =>
        this.categoriesService.categoryDetailSubject.next(toReturn),
    });
  }
}
