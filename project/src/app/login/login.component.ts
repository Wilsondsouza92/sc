import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
 // encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {

  }
   userName:String;
   password:String;

   
 
}
