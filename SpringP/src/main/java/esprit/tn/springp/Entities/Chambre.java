package esprit.tn.springp.Entities;
import jakarta.persistence.*;

import lombok.*;

import java.io.Serializable;
import java.util.Set;


@Entity
@Getter
@Setter
@ToString (includeFieldNames = false)
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Chambre")
public class Chambre implements Serializable {
    private static final long serialVersionUID=1l;
    @Id
    @GeneratedValue
    @Setter(AccessLevel.NONE)
    @ToString.Exclude
    @Column(name="idChambre")
    private long idChambre;

    @EqualsAndHashCode.Exclude
    @Column(name="numeroChambre")
    private long numeroChambre;
    @Column(name="typeC")
    private TypeChambre typeC;
    @ManyToOne
    Bloc bloc;



}
