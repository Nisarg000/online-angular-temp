import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  
{
  title:string = 'Hello Udemy'
  name = 'Angular ' + VERSION.major;
  
  var2 = 10;
  var1 = 20;
  var3 :string = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
  cs = 2;
}