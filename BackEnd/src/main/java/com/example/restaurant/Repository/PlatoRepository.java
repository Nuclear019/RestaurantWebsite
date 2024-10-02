package com.example.restaurant.Repository;

import com.example.restaurant.Entity.Platos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface PlatoRepository extends JpaRepository<Platos, Long> {

    @Query("SELECT p FROM Platos p WHERE p.IdPlatoCategoria.idPlatoCategoria = ?1")
    List<Platos> findAllByPlatoCategoria(Long idCategoriaPlato);



}