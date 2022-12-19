import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {studentComponent} from "./students/student.component";
import {HomeComponent} from "./pages/Home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {CategoryComponent} from "./pages/Category/Category.Component";
import {RegisterComponent} from "./pages/Register/Register.Component";
import {ProductComponent} from "./pages/Product/Product.Component";
import {LoginComponent} from "./pages/Login/Login.Component";
import {HttpClientModule} from "@angular/common/http";
//1. khai bao danh sach cac routing
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: CategoryComponent},
  { path: 'product/:id', component: ProductComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
]
@NgModule({
  declarations: [
    AppComponent,studentComponent,
    HomeComponent,CategoryComponent,RegisterComponent,ProductComponent,LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
