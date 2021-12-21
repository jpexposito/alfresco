<html>
 <head> 
   <title>Web Script de Subida</title>
   <!-- definir los style para dar formato al formulario -->
   <!-- 
   <link rel="stylesheet" href="style.css" TYPE="text/css">
   -->
 </head>
 <body>
   <table>
     <tr>
      <!--
       <td><img src="Logo32.png" alt="Alfresco" /></td>
       -->
       <td>Web Script de Subida</td>
     </tr>
     <tr><td><td>Alfresco ${server.edition} v${server.version}
   </table>
   <p>
   <table>
     <form action="${url.service}" method="post" enctype="multipart/form-data" accept-charset="utf-8">
       <tr><td>Fichero:<td><input type="file" name="file">
       <tr><td>Titulo:<td><input name="title">
       <tr><td>Descripcion:<td><input name="desc">
       <tr><td><td>
       <tr><td><td><input type="submit" name="submit" value="Upload">
     </form>
   </table>
 </body>
</html> 