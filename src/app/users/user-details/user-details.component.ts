import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { User } from '../../user-inteface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user$: Observable<User>;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
      this.user$ = this.apiService.getUserDetails();
  }

}
