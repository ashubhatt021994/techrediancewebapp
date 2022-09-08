import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { ignoreElements } from 'rxjs';

@Component({
  selector: 'app-admin-classes',
  templateUrl: './admin-classes.component.html',
  styleUrls: ['./admin-classes.component.css']
})
export class AdminClassesComponent implements OnInit {
  activeRoutedService: any;
  kind: any;
  showList=false;
  showForm=false;

  constructor(private route:ActivatedRoute) { }
  
  selectedId: number | undefined;
  select: any;
  ngOnInit() {
    this.kind = this.route.snapshot.data['kind'];
    if(this.kind=='list'){
      this.showList=true;
    }else if(this.kind=='add'){
      this.showForm=true;
    }
}  
     
}


