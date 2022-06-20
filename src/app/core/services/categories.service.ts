import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, combineLatest, Observable, tap, throwError } from 'rxjs';
import { ICategories } from 'src/app/shared/icategories';
import { ICategoryDetail } from 'src/app/shared/icategory-detail';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categoriesBaseUrl = environment.externalService.baseUri;
  categoriesDetailBaseUrl = environment.chucknorisService.baseUri;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<ICategories> {
    return this.http
      .get<ICategories>(`${this.categoriesBaseUrl}/api/categories`)
      .pipe(
        tap((x) => console.log(x)),
        catchError(this.handleError)
      );
  }

  getCategoriesDetails(categoryName: string): Observable<ICategoryDetail> {
    return this.http
      .get<ICategoryDetail>(
        `${this.categoriesDetailBaseUrl}/jokes/random?category=${categoryName}`
      )
      .pipe(
        tap((x) => console.log(x)),
        catchError(this.handleError)
      );
  }
  temp!:ICategoryDetail;
  categoryDetailSubject = new BehaviorSubject<ICategoryDetail>(this.temp);
  categoryDetailAction = this.categoryDetailSubject.asObservable();

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(() => errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return throwError(() => error || 'Node.js server error');
  }
}
