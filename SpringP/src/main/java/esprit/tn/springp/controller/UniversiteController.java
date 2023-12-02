package esprit.tn.springp.controller;

import esprit.tn.springp.Entities.Universite;
import esprit.tn.springp.Service.UniversiteService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/universite")
public class UniversiteController {
    @Autowired
    UniversiteService universiteService;


    @GetMapping("/getAllUniversite")
    public List<Universite> getAllUniversite() {
        List<Universite> listUniversites = universiteService.getAllUniversite();
        return listUniversites;
    }
    @GetMapping("/getbyidUniversite/{idUniversite}")
    public Universite getbyidUniversite(@PathVariable("idUniversite") Long uId) {
        Universite universite = universiteService.getbyidUniversite(uId);
        return universite;
    }
    @PostMapping("/add-universite")
    public Universite addUniversite(@RequestBody Universite u) {
        Universite universite = universiteService.addUniversite(u);
        return universite;
    }
    @DeleteMapping("/remove-universite/{idUniversite}")
    public void removeUniversite(@PathVariable("idUniversite") Long uId) {
        universiteService.removeUniversite(uId);
    }
    @PutMapping("/modify-universite")
    public Universite modifyUnivesite(@RequestBody Universite u) {
        Universite universite = universiteService.modifyUnivesite(u);
        return universite;
    }
}