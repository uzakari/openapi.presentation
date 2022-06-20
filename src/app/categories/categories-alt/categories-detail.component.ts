import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-categories-detail',
  templateUrl: './categories-detail.component.html',
  styleUrls: ['./categories-detail.component.css'],
})
export class CategoriesDetailComponent implements OnInit {
  categoryName:string | undefined;
  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {}

  categoriesDetails$ = this.categoryService.categoryDetailAction
  .pipe(
    tap(console.log)
  );
}
