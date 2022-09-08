import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAllCoursesComponent } from './mycomponent/admin-all-courses/admin-all-courses.component';
import { AdminClassesComponent } from './mycomponent/admin-classes/admin-classes.component';
import { AdminDashboardComponent } from './mycomponent/admin-dashboard/admin-dashboard.component';
import { AdminExportComponent } from './mycomponent/admin-export/admin-export.component';
import { AdminImportComponent } from './mycomponent/admin-import/admin-import.component';
import { AdminNewEnquiryComponent } from './mycomponent/admin-new-enquiry/admin-new-enquiry.component';
import { PagenotfoundComponent } from './mycomponent/pagenotfound/pagenotfound.component';
import { SidebarComponent } from './mycomponent/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', redirectTo:'Dashboard',pathMatch:'full'},
  { path: 'Dashboard', component: AdminDashboardComponent },
  {path: 'Sidebar', component: SidebarComponent},
  {path: 'Enquiry', component: AdminNewEnquiryComponent},
  {path: 'Import', component: AdminImportComponent},
  {path: 'Export', component: AdminExportComponent},
  {
    path: 'classes',
    children: [
      { path: 'AllClasses', component: AdminClassesComponent, data: { kind: 'list' } },
      { path: 'Add', component: AdminClassesComponent, data: { kind: 'add' } }
    ]
  },
  {
    path: 'courses',
    children: [
      { path: 'AllCourses', component: AdminAllCoursesComponent, data: { coursesInfo: 'courseList' } },
      { path: 'AddCourses', component: AdminAllCoursesComponent, data: { coursesInfo: 'courseadd' } }
    ]
  },
 
  { path: '**', component: PagenotfoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

