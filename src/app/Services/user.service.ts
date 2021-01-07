import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: any = [
    {
      id: '1',
      name: 'Jane',
      role: 'Designer',
      pokemon: 'Blastoise'
    },
    {
      id: '2',
      name: 'Bob',
      role: 'Developer',
      pokemon: 'Charizard'
    },
    {
      id: '3',
      name: 'Jim',
      role: 'Developer',
      pokemon: 'Venusaur'
    }
  ]
    
    // Add employee object
    
  

  constructor() { }

  getall(): any {
    return of(this.users);
  }

  findOne(id: string): Observable<object> {
    const user = this.users.find((u: any) => {
      return u.id === id;
    });
    return of(user);
  }

  addUser(reqObj : any): Observable<object> {
    let check = this.users.find(element => element.id == reqObj.id);
    if(check != null){
      return reqObj;
    }
    return null;
  }

  IsLoggedIn(){
    return localStorage.getItem('token') != null ? true : false;
  }

  isDeleted(id){
    if(id > 1){
      return true;
    }
    return false;
  }
}
