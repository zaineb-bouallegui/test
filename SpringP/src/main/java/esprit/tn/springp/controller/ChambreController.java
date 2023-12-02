package esprit.tn.springp.controller;

import esprit.tn.springp.Entities.Chambre;
import esprit.tn.springp.Service.ChambreService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Gestion Chambre")
@RestController
@AllArgsConstructor
@RequestMapping("/chambre")
public class ChambreController {
    @Autowired
    ChambreService chambreService;

    @Operation(description = "récupérer toutes les chambres de la base de données")
    @GetMapping("/get-all-chambres")
    public List<Chambre> getChambres() {
        List<Chambre> listChambres = chambreService.getAllChambre();
        return listChambres;
    }
    @Operation(description = "récupérer une chambre selon son id de la base de données")
    @GetMapping("/get-chambre/{idChambre}")
    public Chambre getbyidChambre(@PathVariable("idChambre") Long chId) {
        Chambre chambre = chambreService.getbyidChambre(chId);
        return chambre;
    }
    @Operation(description = "Ajouter une chambre dans la base de données")
    @PostMapping("/add-chambre")
    public Chambre addChambre(@RequestBody Chambre ch) {
        Chambre chambre = chambreService.addChambre(ch);
        return chambre;
    }
    @Operation(description = "Supprimer une chambre selon son id de la base de données")
    @DeleteMapping("/remove-chambre/{idChambre}")
    public void removeChambre(@PathVariable("idChambre") Long chId) {
        chambreService.removeChambre(chId);
    }
    @Operation(description = "Modifier une chambre dans la base de données")
    @PutMapping("/modify-chambre")
    public Chambre modifyChambre(@RequestBody Chambre c) {
        Chambre chambre = chambreService.modifyChambre(c);
        return chambre;
    }
}
