import { Component, NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AtivProfComponent } from "./ativ-prof.component";


const heroesRoutes: Routes = [
    {
      path:'AtivProf', redirectTo: '/AtivProf'
    },
    { 
        path: 'AtivProf', component: AtivProfComponent, 
        data: {
         breadcrumb : 'AtividadesProfissionais'      
        }
    }
    
]