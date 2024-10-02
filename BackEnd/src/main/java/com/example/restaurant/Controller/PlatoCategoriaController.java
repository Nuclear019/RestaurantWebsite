package com.example.restaurant.Controller;

import com.example.restaurant.Entity.PlatosCategoria;
import com.example.restaurant.Service.PlatoCategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("api/v1")
@RestController
public class PlatoCategoriaController {

    @Autowired
    PlatoCategoriaService platoCategoriaService;

    @GetMapping("/plato-categorias")
    public List<PlatosCategoria> getPlatoCategorias() {
        List<PlatosCategoria> platoCategorias = platoCategoriaService.getPlatoCategorias();
        return platoCategorias;
    }

}
