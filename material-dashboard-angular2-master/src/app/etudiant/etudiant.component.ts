import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant';
import { EtudiantService } from 'app/services/etudiant.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {
  etudiants: Etudiant[];
  errorMessage: string = '';
  recherche: string = '';
  base64Data: Int8Array;
retrievedImage: string;
image: string
message: File;
photo: File;

  constructor(private etudiantService : EtudiantService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEtudiants();
    
  }
private getEtudiants(){
  this.etudiantService.getEtudiant().subscribe(data => {
    this.etudiants=data;
  });
}

 deleteEtudiant(idEtudiant: number){
  this.etudiantService.deleteEtudiant(idEtudiant).subscribe( data => {
    console.log(data);
    this.getEtudiants();
  })
}
updateEtudiant(idEtudiant: number){
  this.router.navigate(['update-etudiant', idEtudiant]);
}



etudiantDetails(idEtudiant: number){
  this.router.navigate(['etudiant-details', idEtudiant]);
}


rechercher() {
  if (this.recherche.trim() !== '') {
      this.etudiantService.getByNomEt(this.recherche).subscribe(
          data => {
              this.etudiants = data;
          },
          error => {
              this.errorMessage = 'Erreur lors de la recherche';
              console.error(error);
          }
      );
  } else {
      // Si le champ est vide, afficher tous les étudiants (ou une liste par défaut)
      this.etudiantService.getEtudiant().subscribe(
          data => {
              this.etudiants = data;
          },
          error => {
              this.errorMessage = 'Erreur lors de la récupération de la liste des étudiants';
              console.error(error);
          }
      );
  }
}

getImage(etudiant:Etudiant) {

  console.log(this.retrievedImage)
   this.base64Data = etudiant.image.data;
   this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;

   return this.retrievedImage;
  
 }

}
