package com.example.restaurant;

import com.example.restaurant.Entity.Reserva;
import jakarta.mail.*;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;

import java.util.Properties;

public class MailSenderClass {

    public void sendEmail(Reserva reserva) {
        String sender = "loremipsum.restaurant@gmail.com"; // Email "inventado"
        String authUser = "loremipsum.restaurant@gmail.com"; // Tu correo real para autenticación
        String password = "oiyv yklb mfsz tfoa"; // Tu contraseña real
        String subject = "Reserva realizada con exito!!";
        String receiver = reserva.getCorreoReserva();
        String content = "Hola " + reserva.getNombreReserva() + ",\n\n" +
                "Tu reserva para el dia " + reserva.getFechaReserva() + " a las " + reserva.getHoraReserva() +
                " para " + reserva.getPersonasReserva() + " personas ha sido realizada con exito.\n\n" +
                "Gracias por confiar en nosotros.\n\n" +
                "Un saludo,\n" +
                "Equipo de Lorem Ipsum Restaurant";

        // Propiedades del servidor SMTP
        Properties properties = new Properties();
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");

        properties.put("mail.smtp.host", "smtp.gmail.com");
        properties.put("mail.smtp.port", "587");


        // Crear sesión con autenticación
        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(authUser, password);
            }
        });

        try {
            // Crear un nuevo mensaje de correo
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(sender)); // Remitente inventado
            message.setRecipient(Message.RecipientType.TO, new InternetAddress(receiver));
            message.setSubject(subject);
            message.setText(content);

            // Enviar el correo
            Transport.send(message);
            System.out.println("Email enviado.");
        } catch (MessagingException e) {
            e.printStackTrace();
            System.out.println("Error enviando el correo.");
        }
    }
}

