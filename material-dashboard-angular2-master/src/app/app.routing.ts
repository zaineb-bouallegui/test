import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { CreateEtudiantComponent } from './create-etudiant/create-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { EtudiantDetailsComponent } from './etudiant-details/etudiant-details.component';


const routes: Routes =[
  {
    path: 'etudiant', component: EtudiantComponent},
    {path: 'create-etudiant' , component: CreateEtudiantComponent},
    
    { path: '' ,redirectTo: 'dashboard', pathMatch: 'full', },
     {
    path: '', component: AdminLayoutComponent,
    children: [{path: '',loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  {path: 'update-etudiant/:idEtudiant' , component: UpdateEtudiantComponent},
  {path: 'etudiant-details/:idEtudiant' , component: EtudiantDetailsComponent},

  
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [RouterModule
  ],
})
export class AppRoutingModule { }
