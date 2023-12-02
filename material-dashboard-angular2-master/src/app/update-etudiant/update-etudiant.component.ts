import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'app/etudiant';
import { EtudiantService } from 'app/services/etudiant.service';


@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.scss']
})
export class UpdateEtudiantComponent implements OnInit {
  idEtudiant: number;
  etudiant: Etudiant = new Etudiant();

  constructor(private etudiantService : EtudiantService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.idEtudiant= this.route.snapshot.params['idEtudiant'];

    this.etudiantService.getEtudiantById(this.idEtudiant).subscribe(data => {
      this.etudiant = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.etudiantService.updateEtudiant(this.idEtudiant, this.etudiant).subscribe( data =>{
      this.goToEtudiantList();
    }
    , error => console.log(error));
  }

  goToEtudiantList(){
    this.router.navigate(['/etudiant']);
  }

}
