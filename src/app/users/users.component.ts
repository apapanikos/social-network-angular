import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { User } from '../user-inteface'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>
  selected: boolean = false;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers(): void {
    this.users$ = this.apiService.getUsers()
  }

  onSelected(user: User) {

    this.apiService.shareUserDetails(user)

  }

}
