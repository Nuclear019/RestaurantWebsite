**Aplicación web enfocada a la gestión de restaurantes. A través de ella se puede controlar las reservas realizadas y gestionar empleados para asignarles donde deben trabajar. También permite la visualización y modificación de la carta. 
El objetivo de esta aplicación es el de mejorar la eficiencia de los restaurantes a la hora de gestionar y trabajar con las reservas realizadas en sus locales**

- Creado con Springboot y Hibernate (Java) para el desarrollo del BackEnd, creando una api donde se guardan todas las reservas.Esta api está relacionada a una base de datos H2

- Para el FrontEnd empleo React.js donde recojo los datos haciendo consultas a la api y guardandolos en variables.
  ![DiagramaClases](https://github.com/user-attachments/assets/bf06facd-d191-4cdb-b6bc-58ceb5c834e6)



Para poder ejecutar este codigo deberás descargar las dependencias de Java
  - Dependencias de SpringBoot
  - Dependencias de Jakarta (Jakarta Mail y Jakarta Persistance
  - Dependencias de H2Database
  - Dependencias de JUnit

Para el FrontEnd deberás realizar este comando desde la carpeta del proyecto para descargar todas las librerias y dependencias:
  -  npm install 


Por ultimo deberás conectar la base de datos con el BackEnd mediante Hibernate configurando el archivo de persitence.xml


_Aplicación desarrollada por Miguel Seoane_
