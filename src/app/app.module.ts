import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


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
    ButtonModule,
    InputTextModule,
    FormsModule,
    MenubarModule,
    HttpClientModule,
  ],
  providers: [
    CategoryService,
    DomainService,
    PublisherService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
