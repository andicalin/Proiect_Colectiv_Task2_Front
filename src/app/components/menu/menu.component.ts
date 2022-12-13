import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  email : string = ""
  isAdmin : boolean = false
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('email') != null){
      let adminRegEx = new RegExp('^[a-zA-Z|\.]*@ubbcluj.ro')
      this.email = localStorage.getItem('email')!
      if (adminRegEx.test(this.email)){
        //an admin has logged in right here
        this.isAdmin = true
      }
    }

  }

}
