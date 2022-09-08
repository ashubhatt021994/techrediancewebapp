import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-all-courses',
  templateUrl: './admin-all-courses.component.html',
  styleUrls: ['./admin-all-courses.component.css']
})
export class AdminAllCoursesComponent implements OnInit {
  activeRoutedService: any;
  coursesInfo: any;
  showList = false;
  showForm = false;

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    this.coursesInfo = this.route.snapshot.data['coursesInfo'];
    if (this.coursesInfo == 'courseList') {
      this.showList = true;
    } else if (this.coursesInfo == 'courseadd') {
      this.showForm = true;
    }
  }
} 