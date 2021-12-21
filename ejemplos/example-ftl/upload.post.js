var filename = null;
var content = null;
var title = "";
var description = "";
// coger los atributos del fichero
for each(field in formdata.fields) {
   if(field.name == "title") {
      title = field.value;
   } else if (field.name == "desc") {
   description = field.value;
   } else if (field.name == "file" && field.isFile) {
      filename = field.filename;
      content = field.content;
      }
}
// debemos de asegurarnos que los campos obligatorios se han indicado
if (filename == undefined || content == undefined) {
   status.code = 400;
   status.message = "No se puede localizar el fichero a insertar en el request";
   status.redirect = true;
}
else {
   // crear un documento en el raiz de empresa para subir el fichero
   upload = companyhome.createFile("upload" + companyhome.children.length + "_" + filename);
   upload.properties.content.write(content);
   upload.properties.content.encoding = "UTF-8";
   upload.properties.title = title;
   upload.properties.description = description;
   upload.save();

   // inicializar model para la plantilla de respuesta
   model.upload = upload;
}