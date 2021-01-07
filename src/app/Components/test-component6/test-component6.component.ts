import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-component6',
  templateUrl: './test-component6.component.html',
  styleUrls: ['./test-component6.component.css']
})
export class TestComponent6Component implements OnInit {

  users;
  reqObj ={
    id: '3',
    name: 'Bob',
    role: 'Developer',
    pokemon: 'Charizard'
  };
  constructor(private usersService: UserService, private router : Router) { }

  ngOnInit(): void {
    this.usersService.getall().subscribe(res => {
      this.users = res;
    });

    this.usersService.addUser(this.reqObj)
  }

  clickLogout() {
    this.router.navigate(['/login']);
}

}
