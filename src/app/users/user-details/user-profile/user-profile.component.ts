import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { User }         from '../../../user-inteface';
import { ApiServiceService }  from '../../../services/api-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User

  constructor(
    private route: ActivatedRoute,
    private userService: ApiServiceService,
    private location: Location
    ) { }

  ngOnInit() {
  }


}
