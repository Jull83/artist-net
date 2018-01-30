//Función para cargar archivos.
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
           document.getElementById("publish").innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
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


var $textInput = $("#text-input");

//Funcion para habilitar el bóton de pos texto

$("#text-input").keyup(habilitateButton);

function habilitateButton () {
	var $containerAddText = $("#add-text");

	if($(this).val().trim().length > 0) {
		$containerAddText.removeAttr("disabled");
	} else {
		$containerAddText.attr("disabled", true);
	}
}

//Función para pintar el input de texto en el newsfeed

$("#add-text").click(paintText);
var $textInput = $("#text-input");

function paintText (text) {
  var $text = $textInput.val();
console.log($text);

  var $containerText = $("<div />");
  var $containerP = $("<p />");

  //$containerText.text(text);

  $containerText.append($containerP);
  $containerP.append($text);

  $("#publish").prepend($containerText);
}

//Función para agregar contactos.
$("#add-contact").click(paintContactName);
var $contactInput = $("#contact-input");

function paintContactName(contact) {
  var $contact = $contactInput.val();
  console.log($contact);

  var $contactContainer = $("<div />");
  var $imageContainer = $("<img />");
  var $contactP = $("<p />");

  $contactContainer.append($contactP);
  $contactContainer.append($imageContainer);
  $contactP.append($contact);


  $("#publish-contact").prepend($contactContainer);
}


//Función para pintar las imágenes

$('add-image').click(paintImage);
  var $imageInput = $(".image-input");

function paintImage (image) {
  var $imageInput = $(".thumb");
  var $image = $imageInput.val();

  console.log($image);
  var $containerImage = $("<div />");
  $containerImage.append($image);

  $("publish").prepend($containerImage);
}





//Funcion para habilitar boton agregar contactos
// $("#contact-input").keyup(habilitateButton);
//
// function habilitateButton () {
// 	var $containerAddText = $("#add-text");
//
// 	if($(this).val().trim().length > 0) {
// 		$containerAddText.removeAttr("disabled");
// 	} else {
// 		$containerAddText.attr("disabled", true);
// 	}
// }
