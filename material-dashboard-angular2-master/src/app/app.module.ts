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
import { NgxPaginationModule } from 'ngx-pagination';

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
    NgxPaginationModule,
    
    
   
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
