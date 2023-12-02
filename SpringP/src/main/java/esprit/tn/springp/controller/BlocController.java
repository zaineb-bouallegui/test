package esprit.tn.springp.controller;


import esprit.tn.springp.Entities.Bloc;
import esprit.tn.springp.Service.BlocService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/bloc")
public class BlocController {
@Autowired
    BlocService blocService;
 @GetMapping("/retrieve-all-blocs")
    public List<Bloc> getBlocs() {
        List<Bloc> listblocs = blocService.retrieveAllBlocs();
        return listblocs;
    }

    @GetMapping("/retrieve-bloc/{chambre-id}")
    public Bloc retrieveBloc(@PathVariable("bloc-id") Long chId) {
        Bloc bloc = blocService.retrieveBloc(chId);
        return bloc;
    }

    @PostMapping("/add-bloc")
    public Bloc addBloc(@RequestBody Bloc b) {
        Bloc bloc = blocService.addBloc(b);
        return bloc;
    }

    @DeleteMapping("/remove-bloc/{bloc-id}")
    public void removeBloc(@PathVariable("bloc-id") Long chId) {
        blocService.removeBloc(chId);
    }

    @PutMapping("/modify-bloc")
    public Bloc modifyBloc(@RequestBody Bloc b) {
        Bloc bloc = blocService.modifyBloc(b);
        return bloc;
    }

}