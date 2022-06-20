import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ISearchResultContent } from 'src/app/shared/isearch-result-content';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  externalSearchBaseUri = environment.externalService.baseUri;

  constructor(private http: HttpClient) {}

  getPeopelAndJokeResult(searchQuery: string): Observable<ISearchResultContent> {
    return this.http
      .get<ISearchResultContent>(`${this.externalSearchBaseUri}/api/search?query=${searchQuery}`)
      .pipe(
        tap((x) => console.log(x)),
        catchError(this.handleError)
      );
  }

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
