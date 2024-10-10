package com.example.restaurant.Controller;

import com.example.restaurant.Service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RequestMapping("/api/v1")
@RestController
public class UserController {

    @Autowired
    private final UsuarioService usuarioService;

    public UserController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username"); // Asegúrate de que sea "username"
        String password = credentials.get("password");

        try {
            usuarioService.login(username, password);
            return ResponseEntity.ok("Usuario logueado " + username);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Usuario o contraseña incorrectos");
        }

    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username"); // Asegúrate de que sea "username"
        String password = credentials.get("password");
        usuarioService.registrarUsuario(username, password, "ADMIN");
        return ResponseEntity.ok("Usuario registrado " + username);
    }
}
