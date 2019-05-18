import { Injectable } from '@angular/core'
import { Observable, of, Subject } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../user-inteface'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private API_URL: string = 'https://cors-anywhere.herokuapp.com/https://reqres.in/api/users'

  userDetailsSubject: Subject<User> = new Subject()
  userDetails$: Observable<User> = this.userDetailsSubject.asObservable()

  constructor(private http: HttpClient) { }

  //GET USER LIST
  getUsers (): Observable<User[]>{
    return this.http.get<User[]>(this.API_URL)
      .pipe(
        map(res => res['data']),
        catchError(this.handleError<User[]>('getUser', []))
      );
  }

  // GET user by id. Will 404 if id not found 
  getUser(id: number): Observable<User> {
    const url = `${this.API_URL}/${id}`
    return this.http.get<User>(url).pipe(
      map(res => res['data']),
      catchError(this.handleError<User>(`getUser id=${id}`))
    )
  }

  //SHARE USER DETAIL
  shareUserDetails(user: User) {
    this.userDetailsSubject.next(user)
  }

  //GRAB USER DETAILS
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
