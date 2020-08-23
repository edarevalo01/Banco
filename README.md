# Banco

Prueba técnica Banco de Bogotá.

## Despliegue Local

Tecnologías utilizadas
| Tecnología | Versión |
|---------------|:-----------------:|
| Spring Boot | 2.3.3 |
| Docker Engine | 19.03.12 |
| Java | JavaSE-1.8 |
| Node | 12.18.3 |
| npm | 6.14.6 |
| Angular CLI | 10.0.5 |

---

##### Backend

Para el proyecto backend, ubicado en la carpeta **/Backend/Banco/**, ejecutar sobre la raiz `mvn clean install -DskipTests=true`, esto genera un archivo llamado **Banco-0.0.1-SNAPSHOT.jar** dentro de la carpeta **/Backend/Banco/target/** que se utilizará para desplegar el proyecto dentro del contenedor Docker.

Para desplegar el contenedor de Docker, ejecutar en la linea de comandos sobre la raiz del proyecto backend `docker-compose up` esto se encargará de descargar e instalar todas las librerías necesarias para el correcto funcionamiento de la aplicación, como son el caso de `openjdk` para poder obtener Java 1.8 en el contenedor y `PostgresSQL` para tener el motor de base de datos dentro del contenedor.

> La aplicación backend debería estar escuchando peticiones desde `http://localhost:8080/api/`

---

##### Frontend

Para desplegar el proyecto Frontend, ubicado en la carpeta **/Frontend/Banco/**, ejecutar sobre la raiz del proyecto: `npm install`, que se encargará de descargar e instalar todas las librerías necesarias para el correcto funcionamiento de la aplicación.

Ejecutar en la raiz del proyecto `ng serve -o` para desplegar la aplicación en un ambiente local, esta se abrirá automáticamente en el navegador predeterminado del sistema desde `http://localhost:4200`.
