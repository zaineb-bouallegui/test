import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'app/etudiant';
import { EtudiantService } from 'app/services/etudiant.service';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-etudiant',
  templateUrl: './create-etudiant.component.html',
  styleUrls: ['./create-etudiant.component.scss']
})
export class CreateEtudiantComponent implements OnInit {
  etudiantForm: FormGroup;
  etudiant: Etudiant = new Etudiant();
  photo: File;
  image: string;
  base64Data: Int8Array;
  retrievedImage: string;

  constructor(
    public etudiantService: EtudiantService,
    private router: Router,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.etudiantForm = this.formBuilder.group({
      nomEt: ['', Validators.required],
      prenomEt: ['', Validators.required],
      cin: ['', Validators.required],
      ecole: ['', Validators.required],
      dateNaissance: ['', Validators.required],
    });
  }

  saveEtudiant() {
    const formData = new FormData();
    formData.append('image', this.photo);

    const etudiantData = {
      nomEt: this.etudiant.nomEt,
      prenomEt: this.etudiant.prenomEt,
      cin: this.etudiant.cin,
      ecole: this.etudiant.ecole,
      dateNaissance: this.etudiant.dateNaissance,
    };

    formData.append('etudiant', JSON.stringify(etudiantData));

    this.etudiantService.CreateEtudiant(formData).subscribe(
      (data) => {
        console.log(data);
        this.goToEtudiant();
      },
      (error) => console.log(error)
    );
  }

  goToEtudiant() {
    this.router.navigate(['/etudiant']);
  }

  onSubmit() {
    if (this.etudiantForm.valid) {
      this.etudiant.nomEt = this.etudiantForm.controls.nomEt.value;
      this.etudiant.prenomEt = this.etudiantForm.controls.prenomEt.value;
      this.etudiant.cin = this.etudiantForm.controls.cin.value;
      this.etudiant.ecole = this.etudiantForm.controls.ecole.value;
      this.etudiant.dateNaissance = this.etudiantForm.controls.dateNaissance.value;

      console.log(this.etudiant);
      this.saveEtudiant();
    } else {
      console.log('Form is invalid');
    }
  }

  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      this.photo = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.image = reader.result as string;
      };
      reader.readAsDataURL(this.photo);
    }
  }

  // getImage(etudiant: Etudiant) {
  //   this.base64Data = etudiant.image.data;
  //   this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
  //   return this.retrievedImage;
  // }
  getImage(etudiant: Etudiant) {
    if (etudiant && etudiant.image && etudiant.image.data) {
      this.base64Data = etudiant.image.data;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      return this.retrievedImage;
    } else {
      return ''; // or any default image URL or placeholder
    }
  }
  
}
