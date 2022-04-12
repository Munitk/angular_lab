import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadeComponent } from './components/heade/heade.component';
import { CourseComponent } from './components/course/course.component';
import { HomeComponent } from './components/home/home.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { ContactAddressComponent } from './components/contact-address/contact-address.component';
// import { ContactFormComponent } from './components/conact-form/conact-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeadeComponent,
    CourseComponent,
    HomeComponent,
    ListCourseComponent,
    MainContainerComponent,
    ListContactComponent,
    ServicesComponent,
    LoginComponent,
    ContactAddressComponent,
    // ContactFormComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
