import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant';
import { ActivatedRoute } from '@angular/router';
import { EtudiantService } from '../services/etudiant.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-etudiant-details',
  templateUrl: './etudiant-details.component.html',
  styleUrls: ['./etudiant-details.component.css']
})
export class EtudiantDetailsComponent implements OnInit {
  idEtudiant!: number;
  etudiant!: Etudiant;
  photo: File;
  image: string;
  base64Data: Int8Array;
  retrievedImage: string;
 
  constructor(private route: ActivatedRoute,  private router: Router,private etudiantService: EtudiantService) { }
  ngOnInit(): void {
    this.idEtudiant = this.route.snapshot.params['idEtudiant'];

    this.etudiant = new Etudiant();
    this.etudiantService.getEtudiantById(this.idEtudiant).subscribe( data => {
      this.etudiant = data;
    });

}
goToEtudiant(){
  this.router.navigate(['/etudiant']);
}

getImage(etudiant: Etudiant) {
  console.log(etudiant)
  if (etudiant && etudiant.image && etudiant.image.data) {
    this.base64Data = etudiant.image.data;
    this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    return this.retrievedImage;
  } else {
    return ''; // or any default image URL or placeholder
  }
}
}