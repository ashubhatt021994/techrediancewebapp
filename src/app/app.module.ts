import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './mycomponent/register/register.component';
import { LoginComponent } from './mycomponent/login/login.component';
import { HeaderComponent } from './mycomponent/header/header.component';
import { FooterComponent } from './mycomponent/footer/footer.component';
import { AdminDashboardComponent } from './mycomponent/admin-dashboard/admin-dashboard.component';
import { SidebarComponent } from './mycomponent/sidebar/sidebar.component';
import { AdminClassesComponent } from './mycomponent/admin-classes/admin-classes.component';
import { AdminAllCoursesComponent } from './mycomponent/admin-all-courses/admin-all-courses.component';
import { AdminNewEnquiryComponent } from './mycomponent/admin-new-enquiry/admin-new-enquiry.component';
import { AdminImportComponent } from './mycomponent/admin-import/admin-import.component';
import { AdminExportComponent } from './mycomponent/admin-export/admin-export.component';
import { PagenotfoundComponent } from './mycomponent/pagenotfound/pagenotfound.component';
import { HomePageComponent } from './mycomponent/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AdminDashboardComponent,
    SidebarComponent,
    AdminClassesComponent,
    AdminAllCoursesComponent,
    AdminNewEnquiryComponent,
    AdminImportComponent,
    AdminExportComponent,
    PagenotfoundComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
