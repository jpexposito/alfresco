<div align="justify">

# Instalación de Alfresco en Apache Tomcat.

<div align="center">
  <img width="150px" src="../../img/install-zip.png">
</div>

## PreRequesitos

La instalación de Alfresco a través de una distribución en __ZIP__ requiere tener el siguiente software instalado en el servidor;
- __Java: OpenJDK 11 recomendada__.
- __Apache Tomcat__.
- __Base de Datos: PostgreSQL or MySQL__.
- __ActiveMQ__.
- __LibreOffice__.
- __ImageMagick__.

## Descripción

  Para realizar la instalación de Alfresco debemos de tener instalados y configurados, los siguiente prerrequisitos:
  - Java.
  - Broker de Mensajes (ActiveMQ).
  - Base de Datos (PostgreSQL o MySQL).
  - Apache Tomcat. Instalación y verificación de que arranca de forma correcta.


  Los pasos serán:
  -  En primer lugar, debemos de registrarnos en el __portal de Alfresco__, descargar el __Zip__ con la distribución.
  - Generar los [certificados](https://docs.alfresco.com/search-services/latest/config/keys/).
  - Instalar y configurar el __Contenedor de Servicios de alfresco__.
  - Instalar algún __Alfresco Module Packages (AMP)__, tal como: __Alfresco Share, Google Docs Integration, y Alfresco Office Services__.
  - Configurar __ActiveMQ__.
  - Instalar el software de tercero, utilizado por el __Contenedor de Servicios de alfresco__. Incluye: __LibreOffice, ImageMagick, y Alfresco PDF Renderer__.
  - Revisa y testea todas la configuraciones. Los pasos serán:
   - Arranca y configura la __BBDD__.
   - Arranca y configura __ActiveMQ__.
   - Arranca el __repositorio__.


  En función de los puertos en los que este configurado, podrás acceder a cada uno de los servicios de los que dispone __Alfresco__.

## Referencias

- [Instalación de Alfresco a través de Tomcat](https://docs.alfresco.com/content-services/6.2/install/zip/).
- [Generación y configuración de certificados en Alfresco](https://docs.alfresco.com/search-services/latest/config/keys/).

</div>
