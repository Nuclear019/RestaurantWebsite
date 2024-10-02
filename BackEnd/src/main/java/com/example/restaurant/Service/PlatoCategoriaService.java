package com.example.restaurant.Service;

import com.example.restaurant.Entity.PlatosCategoria;
import com.example.restaurant.Repository.PlatoCategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlatoCategoriaService {

    @Autowired
    PlatoCategoriaRepository platoCategoriaRepository;

    public List<PlatosCategoria> getPlatoCategorias() {
        return platoCategoriaRepository.findAll();
    }

}
