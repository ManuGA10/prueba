import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../entities/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  downloadedUsers: User [];
  users: User [];
  @Input() textSearch: string;

  constructor (public service: UsersService){}

  ngOnInit (){
      this.service.getRequest().subscribe(
      (data) => this.processResult(data),
      (error) => this.processError(error));
  }

  ngOnChanges(){
    if (typeof this.textSearch !== "undefined"){
      if (this.textSearch === ""){
        this.users = this.downloadedUsers;
      }
      else {
        let aux_users: User [] = [];
        for (var i=0; i<this.downloadedUsers.length; i++){
          if ((this.downloadedUsers[i].name).includes(this.textSearch)){
            aux_users.push(this.downloadedUsers[i]);
          }
          else if ((this.downloadedUsers[i].email).includes(this.textSearch)){
            aux_users.push(this.downloadedUsers[i]);
          }
          else if ((this.downloadedUsers[i].position).includes(this.textSearch)){
            aux_users.push(this.downloadedUsers[i]);
          }
        }
        this.users = aux_users;
      }
    }
  }

  processResult (data: any) {
    this.downloadedUsers = data;
    this.users = data;
  }

  processError (error: any){
    console.log(error);
  }

}