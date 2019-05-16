import { Injectable } from '@angular/core'
import { Observable, of, Subject } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../user-inteface'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private API_URL: string = 'https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/users/'

  userDetailsSubject: Subject<User> = new Subject()
  userDetails$: Observable<User> = this.userDetailsSubject.asObservable()

  constructor(private http: HttpClient) { }

  getUsers (): Observable<User[]>{
    return this.http.get<User[]>(this.API_URL)
      .pipe(
        catchError(this.handleError<User[]>('getUser', []))
      );
  }

    //share user details
    shareUserDetails(user: User) {
      this.userDetailsSubject.next(user)
    }

    getUserDetails(): Observable<User>{
      return this.userDetails$
    }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
}
