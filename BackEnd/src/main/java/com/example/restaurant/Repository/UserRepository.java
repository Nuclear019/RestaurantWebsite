package com.example.restaurant.Repository;

import com.example.restaurant.Entity.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Usuarios, Long> {
    Usuarios findByUsername(String username);



}
