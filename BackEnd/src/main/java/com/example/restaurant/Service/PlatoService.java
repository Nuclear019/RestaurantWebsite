package com.example.restaurant.Service;

import com.example.restaurant.Entity.Plato;
import com.example.restaurant.Repository.PlatoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlatoService {

    PlatoRepository platoRepository;

    public PlatoService(PlatoRepository platoRepository) {
        this.platoRepository = platoRepository;
    }

    public List<Plato> getPlatos() {
        return platoRepository.findAll();
    }

    public void addPlato(Plato plato) {
        platoRepository.save(plato);
    }
}
