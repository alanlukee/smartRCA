import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '',redirectTo:'/login', pathMatch: 'full'},
    {path:'login', component:LoginComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'search',component:SearchComponent}
];


console.log("Entered Routing");
