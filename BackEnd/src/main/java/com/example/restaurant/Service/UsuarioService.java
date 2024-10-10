package com.example.restaurant.Service;

import com.example.restaurant.Entity.Usuarios;
import com.example.restaurant.Repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    private final BCryptPasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    public UsuarioService(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public void registrarUsuario(String username, String password, String rol) {
        // Cifrar la contraseña
        String passwordCifrada = passwordEncoder.encode(password);

        // Guardar el usuario y la contraseña cifrada en la base de datos
        Usuarios usuario = new Usuarios();
        usuario.setUsername(username);
        usuario.setPassword(passwordCifrada);
        usuario.setRolUsuario(rol);

        userRepository.save(usuario);
        System.out.println("Usuario registrado correctamente");
    }

    public boolean autenticarUsuario(String username, String password) {
        // Buscar el usuario por nombre de usuario
        Usuarios usuario = userRepository.findByUsername(username);

        // Si el usuario no existe, devuelve false
        if (usuario == null) {
            return false;
        }

        // Comparar la contraseña proporcionada con la almacenada
        return passwordEncoder.matches(password, usuario.getPassword());
    }

    public void login(String username, String password) {
        // Lógica de autenticación
        if (autenticarUsuario(username, password)) {
            System.out.println("Usuario logueado correctamente");
            // Aquí puedes agregar lógica adicional como generar un token JWT, etc.
        } else {
            throw new RuntimeException("Usuario o contraseña incorrectos");
        }
    }
}
