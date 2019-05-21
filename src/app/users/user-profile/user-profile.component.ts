import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
 
import { User }         from '../../user-inteface';
import { ApiServiceService }  from '../../services/api-service.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user$: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiServiceService,
    private location: Location
    ) { }

  ngOnInit() {
    this.getUser()
  }

  getUser(): void {
    this.user$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = +params.get('id')
        return this.apiService.getUser(id)
      })
    )
  }

}
