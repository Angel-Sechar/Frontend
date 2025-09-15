import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BaseHttpService {
  private http = inject(HttpClient);

  protected get<T>(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(catchError(this.handleError));
  }

  protected post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body).pipe(catchError(this.handleError));
  }

  protected put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(url, body).pipe(catchError(this.handleError));
  }

  protected delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url).pipe(catchError(this.handleError));
  }

  // eslint-disable-next-line class-methods-use-this
  private handleError = (error: unknown) => {
    console.error('API Error:', error);
    return throwError(() => error);
  };
}
