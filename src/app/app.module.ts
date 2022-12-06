import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

import {PasswordModule} from 'primeng/password';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];


import {ButtonModule} from 'primeng/button';

import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { CategoryComponent } from './components/category/category.component';
import { DomainComponent } from './components/domain/domain.component';
import { PublisherComponent } from './components/publisher/publisher.component';
import { CategoryService } from './components/category/service/category.service';
import { HttpClientModule } from '@angular/common/http';
import { DomainService } from './components/domain/service/domain.service';
import { PublisherService } from './components/publisher/service/publisher.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    DomainComponent,
    PublisherComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,

    InputTextModule,
    PasswordModule,
    ButtonModule,
    FormsModule,
    MenubarModule,
    HttpClientModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CategoryService,
    DomainService,
    PublisherService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
