import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IPeople } from 'src/app/shared/ipeople';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  externalServiceUri = environment.externalService.baseUri;

  constructor(private http: HttpClient) { }


  getPeople():Observable<IPeople>{
    return this.http.get<IPeople>(`${this.externalServiceUri}/api/people`)
        .pipe(
          tap(x => console.log(x)),
          catchError(this.handleError)
        )
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
