import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminClassesComponent } from './mycomponent/admin-classes/admin-classes.component';
import { AdminDashboardComponent } from './mycomponent/admin-dashboard/admin-dashboard.component';
import { PagenotfoundComponent } from './mycomponent/pagenotfound/pagenotfound.component';
import { SidebarComponent } from './mycomponent/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', redirectTo:'Dashboard',pathMatch:'full'},
  { path: 'Dashboard', component: AdminDashboardComponent },
  {path: 'Sidebar', component: SidebarComponent},
  {
    path: 'classes',
    children: [
      { path: 'AllClasses', component: AdminClassesComponent, data: { kind: 'list' } },
      { path: 'Add', component: AdminClassesComponent, data: { kind: 'add' } }
    ]
  },
  // { path: 'AllClasses/1', component: AdminClassesComponent },
  // { path: 'Add/2', component: AdminClassesComponent },
  { path: '**', component: PagenotfoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

