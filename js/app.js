function archivo(evt) {
      var files = evt.target.files; // FileList object
       
        //Obtenemos la imagen del campo "file".
      for (var i = 0, f; f = files[i]; i++) {        
           //Solo admitimos imágenes.
           if (!f.type.match('image.*')) {
                continue;
           }
       
           var reader = new FileReader();
           
           reader.onload = (function(theFile) {
               return function(e) {
               // Creamos la imagen.
                      document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
               };
           })(f);
 
           reader.readAsDataURL(f);
       }
}
             
document.getElementById('files').addEventListener('change', archivo, false);


// los pasos para hacer tu función:
// Crear evento
// primero guarda el val() de tu input en una variable
// luego creas todos los elementos que quieres que vayan en tu post
// despues les pones atributos a esos elementos (en tu caso 0al <p> que creaste le pones un
// text( y aqui dentro escribes el nombre de la variable del value del input)
// despues colocas a cada hijo con su padre: <tu seccion de html>
// <div de tu post>
// <p>
// con append



$("#add-text").click(paintText);
var $textInput = $("#text-input");

function paintText (text) {
  var $textInput = $("#text-input");
  var $text = $textInput.val();
console.log($text);

  var $containerText = $("<div />");
  var $containerP = $("<p />");

  //$containerText.text(text);

  $containerText.append($containerP);
  $containerP.append($text);

  $("#publish").prepend($containerText);

}
