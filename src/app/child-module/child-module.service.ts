import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map , retry, catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ChildModuleService {

  private url = 'http://localhost:8080/greetings';
  private greetings$: Observable<any>;
  constructor(private httpClient: HttpClient) { }
  getHeroes(): Observable<any>{
   return this.httpClient.get(this.url)
   .pipe(
     (x=>this.greetings$=x),
     catchError(this.handleError())
   );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // log to console instead
      return of(result as T);
    };
    }
}
