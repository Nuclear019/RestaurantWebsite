package com.example.restaurant;

import com.example.restaurant.Entity.Reserva;
import jakarta.mail.*;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;

import java.util.Properties;

public class MailSenderClass {

    private String sender = "loremipsum.restaurant@gmail.com";
    private String authUser = "loremipsum.restaurant@gmail.com"; // Tu correo real para autenticación
    private String password = "oiyv yklb mfsz tfoa"; // Tu contraseña real

    private Properties properties;

    public MailSenderClass() {
        // Propiedades del servidor SMTP
        properties = new Properties();
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");
        properties.put("mail.smtp.host", "smtp.gmail.com");
        properties.put("mail.smtp.port", "587");
    }

    public void confirmReserve(Reserva reserva) {

        String subject = "Reserva realizada con exito!!";
        String receiver = reserva.getCorreoReserva();
        String content = "Hola " + reserva.getNombreReserva() + ",\n\n" +
                "Tu reserva para el dia " + reserva.getFechaReserva() + " a las " + reserva.getHoraReserva() +
                " para " + reserva.getPersonasReserva() + " personas ha sido realizada con exito.\n\n"
                + "Detalles de la reserva:\n" +
                reserva.getDetallesReserva() + "\n\n" +
                "Gracias por confiar en nosotros.\n\n" +
                "Un saludo,\n" +
                "Equipo de Lorem Ipsum Restaurant";

        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(authUser, password);
            }
        });

        try {
            Message message = createMessage(session,receiver,subject,content);
            Transport.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
            System.out.println("Error enviando el correo.");
        }
    }

    public void cancelReserve(Reserva reserva) {

        String subject = "Reserva cancelada";
        String receiver = reserva.getCorreoReserva();
        String content = "Hola " + reserva.getNombreReserva() + ",\n\n" +
                "Tu reserva para el dia " + reserva.getFechaReserva() + " a las " + reserva.getHoraReserva() +
                " para " + reserva.getPersonasReserva() + " personas ha sido cancelada.\n\n" +
                "Sentimos las molestias.\n\n" +
                "Un saludo,\n" +
                "Equipo de Lorem Ipsum Restaurant";

        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(authUser, password);
            }
        });

        try {
            Message message = createMessage(session,receiver,subject,content);
            Transport.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
            System.out.println("Error enviando el correo.");
        }
    }

    public void changeReserve(Reserva reserva) {

        String subject = "Reserva modificada";
        String receiver = reserva.getCorreoReserva();
        String content = "Hola " + reserva.getNombreReserva() + ",\n\n" +
                "Tu reserva para el dia " + reserva.getFechaReserva() + " a las " + reserva.getHoraReserva() +
                " para " + reserva.getPersonasReserva() + " personas ha sido modificada para el dia " + reserva.getFechaReserva() + " a las "
                + reserva.getHoraReserva() + " para " + reserva.getPersonasReserva() + " personas.\n\n"
                + "Detalles de la reserva:\n" +
                reserva.getDetallesReserva() + "\n\n" +
                "Gracias por confiar en nosotros.\n\n" +
                "Un saludo,\n" +
                "Equipo de Lorem Ipsum Restaurant";

        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(authUser, password);
            }
        });

        try {
            Message message = createMessage(session,receiver,subject,content);
            Transport.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
            System.out.println("Error enviando el correo.");
        }
    }

    private Message createMessage(Session session,String receiver,String subject, String content) throws MessagingException {
        Message message = new MimeMessage(session);
        message.setFrom(new InternetAddress(sender)); // Remitente inventado
        message.setRecipient(Message.RecipientType.TO, new InternetAddress(receiver));
        message.setSubject(subject);
        message.setText(content);
        return message;
    }
}

