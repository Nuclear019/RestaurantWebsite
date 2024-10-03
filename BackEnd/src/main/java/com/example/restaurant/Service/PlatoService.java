package com.example.restaurant.Service;

import com.example.restaurant.Entity.Platos;
import com.example.restaurant.Repository.PlatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlatoService {

    @Autowired
    PlatoRepository platoRepository;


    public List<Platos> getPlatos() {
        return platoRepository.findAll();
    }

    public void addPlato(Platos plato) {
        platoRepository.save(plato);
    }

    public List<Platos> findAllByPlatoCategoriaId(Long idPlatoCategoria) {
        return platoRepository.findAllByPlatoCategoriaId(idPlatoCategoria);
    }
}
