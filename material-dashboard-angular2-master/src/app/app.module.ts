import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { CreateEtudiantComponent } from './create-etudiant/create-etudiant.component';
import { BrowserModule } from '@angular/platform-browser';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    MatPaginatorModule,
    MatTableModule,
    
   
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    EtudiantComponent,
    CreateEtudiantComponent,
    UpdateEtudiantComponent,
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
