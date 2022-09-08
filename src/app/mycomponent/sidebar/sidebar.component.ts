import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit(){
  }
  
  // show(flag: string){
  //   if(flag=='all'){
  //     this.router.navigate(['classes/AllClasses']);
  //   }
  //   else if(flag=='add'){
  //     this.router.navigate(['classes/Add']);
  //   }
   
  // }
  
}
