package esprit.tn.springp.Repository;

import esprit.tn.springp.Entities.Bloc;
import esprit.tn.springp.Entities.Chambre;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChambreRepository extends CrudRepository<Chambre,Long> {
   List<Chambre> findByNumeroChambreContaining(String keyword);
   @Query("SELECT c.bloc.idBloc FROM Chambre c WHERE c.idChambre = :idChambre")
   Long selectBlocIdByChambreId(@Param("idChambre") Long idChambre);

}
