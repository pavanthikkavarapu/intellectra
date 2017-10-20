import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';

// Import HttpClientModule from @angular/common/http
import { HttpClientModule } from '@angular/common/http';

import { TodosComponent } from './todos/todos.component';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
const appRoutes: Routes = [
  { path: 'todos/:userid', component: TodosComponent },
  { path: 'home' , component:HomeComponent},
  { path: 'about' , component:AboutComponent},
  { path: '' , component:HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
