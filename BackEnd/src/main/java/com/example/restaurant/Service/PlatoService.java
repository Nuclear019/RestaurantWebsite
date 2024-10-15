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
    public List<Platos> findPlatosMasVendidos() {
        return platoRepository.findAllByMasVendidoTrue();
    }

    public void updatePlato(Long id, Platos plato) {
        platoRepository.findById(id).ifPresentOrElse(
                (platoActualizado) -> {
                    platoActualizado.setNombrePlato(plato.getNombrePlato());
                    platoActualizado.setDetallesPlato(plato.getDetallesPlato());
                    platoActualizado.setPrecioPlato(plato.getPrecioPlato());
                    platoActualizado.setImagenPlato(plato.getImagenPlato());
                    platoActualizado.setMasVendido(plato.isMasVendido());
                    platoActualizado.setPlatoCategoria(plato.getPlatoCategoria());
                    platoRepository.save(platoActualizado);
                },
                () -> {
                    throw new RuntimeException("Plato no encontrado");
                }
        );
    }

    public void deletePlato(Long id) {
        platoRepository.deleteById(id);
    }
}
