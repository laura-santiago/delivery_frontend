import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  homeTitle: string = "Catering Service";

  constructor(private router: Router) {}

  goToMyList(){
    //this.router.navigateByUrl("/my-menu");
    this.router.navigateByUrl("/list");
  }

  goToCreate(){
    this.router.navigateByUrl("/create");
  }  

  goToStart(){
    this.router.navigateByUrl("/");
  }  

}
