import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './app/login/login.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { SearchComponent } from './app/search/search.component';

import { routes } from './app/app.routes';

import path from 'path';


bootstrapApplication(AppComponent,{
  providers:[
    importProvidersFrom(FormsModule),
    provideRouter(routes),
    provideHttpClient()
]
});
 
