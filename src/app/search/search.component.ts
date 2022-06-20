import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '../core/services/search.service';
import { ISearchResultContent } from '../shared/isearch-result-content';
import { debounceTime, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({});
  searchContent: ISearchResultContent | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.buildSearchForm();
    this.getSearchResult();
  }

  buildSearchForm() {
    this.searchForm = this.formBuilder.group({
      searchInput: ['', [Validators.required]],
      citySelector: ['ALL', [Validators.required]],
    });
  }

  getSearchResult(){
    this.searchForm.get('searchInput')?.valueChanges
      .pipe(
        tap(a => console.log(a)),
        debounceTime(400),
        switchMap(searchTerm => this.searchService.getPeopelAndJokeResult(searchTerm))
      ).subscribe({next:returnSearchContent => this.searchContent == returnSearchContent});
  }
}
