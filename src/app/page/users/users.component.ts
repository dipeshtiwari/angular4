import { Component, OnInit } from '@angular/core';
// provider
import { UsersService } from '../../_providers/users.service';

@Component({
  selector: '',
  templateUrl: './users.html',
  styleUrls: ['./users.css']
})
export class UsersComponent implements OnInit {

  loading: Boolean = false;
  usersList: Array<String> = [];

  constructor(
    private userService: UsersService,
    // private ng4LoadingSpinnerService: Ng4LoadingSpinnerService
  ) { }

  ngOnInit() {
    this.loadAllUsers();
  }

  startLoadingSpinner() {
    // this.ng4LoadingSpinnerService.show();
    setTimeout(function() {
      // this.ng4LoadingSpinnerService.hide();
    }.bind(this), 4000);
  }

  private loadAllUsers() {
    this.userService.getUsersList()
      .subscribe(data => {
        console.log(data);
        this.usersList = data;
      },
      error => {
        console.error(error);
      });
  }

  createUser(){
    
  }

  deletUser(userId: string) {
    this.userService.delete(userId)
    .subscribe(
      data => {
        this.loadAllUsers();
    }, error => {
      console.log(error);
    });

    // this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
  }
}
