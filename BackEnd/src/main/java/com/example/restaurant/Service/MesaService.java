package com.example.restaurant.Service;

import com.example.restaurant.Entity.Mesa;
import com.example.restaurant.Repository.MesaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MesaService {
    private final MesaRepository mesaRepository;

    public MesaService(MesaRepository mesaRepository) {
        this.mesaRepository = mesaRepository;
    }

    public List<Mesa> getMesas(){
        return mesaRepository.findAll();
    }

    public void addMesa(Mesa mesa){
        mesaRepository.save(mesa);
    }

    public Mesa listarMesaPorId(Long id){
        return mesaRepository.findById(id).orElseThrow(()-> new RuntimeException("Mesa no encontrada"));
    }

    public Mesa updateMesa(Long id, Mesa mesa){
        Mesa mesaActualizada = mesaRepository.findById(id).orElseThrow(()-> new RuntimeException("Mesa no encontrada"));
        mesaActualizada.setCapacidad(mesa.getCapacidad());
        mesaActualizada.setCapacidad(mesa.getCapacidad());
        mesaActualizada.setOcupada(mesa.isOcupada());
        mesaRepository.save(mesaActualizada);
        return mesaActualizada;
    }
}
