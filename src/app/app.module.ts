import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {ReactiveFormsModule} from "@angular/forms";

import { MenuComponent } from './components/menu/menu.component';

import {BookTableComponent} from "./components/book-table/book-table/book-table.component";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RippleModule} from "primeng/ripple";
import {DialogService, DynamicDialogModule} from "primeng/dynamicdialog";
import {CommonModule} from "@angular/common";
import {PaginatorModule} from "primeng/paginator";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: 'menu', component: MenuComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
  BookTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    DynamicDialogModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ReactiveFormsModule,
    TableModule,
    RippleModule,
    PaginatorModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
