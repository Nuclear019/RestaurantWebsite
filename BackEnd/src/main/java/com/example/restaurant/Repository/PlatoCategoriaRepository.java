package com.example.restaurant.Repository;

import com.example.restaurant.Entity.PlatosCategoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlatoCategoriaRepository extends JpaRepository<PlatosCategoria, Long> {
}
