import { Component, OnInit } from '@angular/core';
import User from 'src/app/entity/User';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {


  // Firstname="";
  // Lastname="";
  // age=0;
  title = "Fill the form"
  user: User = new User();
  Users: User[] = [];

  // userDetails={
  //   firstname:"",
  //   lastname:"",
  //   age:0
  // }

  save() {

    const observable = this.userService.createUser(this.user);
    observable.subscribe(
      (response: any) => {
        console.log(response);
      },

      function (error) {

        console.log(error);

        alert("Something went wrong!!!")

      },

    )

    // console.log(this.user.firstname);
    // console.log(this.user.lastname);
    // console.log(this.user.age);
    // console.log(this.userDetails.firstname+""+this.userDetails.lastname)
    // console.log(this.userDetails.age)
  }
  constructor(public userService:UserService){}
  ngOnInit():void{
    const promise =this.userService.getUsers();
    promise.subscribe((response) => {
      console.log(response);
      this.Users =response as User[];

    })
  }
}

  
