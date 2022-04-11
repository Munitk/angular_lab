import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadeComponent } from './components/heade/heade.component';
import { CourseComponent } from './components/course/course.component';
import { HomeComponent } from './components/home/home.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadeComponent,
    CourseComponent,
    HomeComponent,
    ListCourseComponent,
    MainContainerComponent,
    ListContactComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
