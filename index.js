//console.log("hello world");


//Contador de Cliks

 var clicks = 0;
    function clickmais() {
        clicks += 1;
        document.getElementById("contador").value = clicks;
 }

 var clicks = 0;
    function clickmenos() {
        clicks -= 1;
        document.getElementById("contador").value = clicks;
 }

 //Validação

function sendform(){

	$("form[name='formulario']").validate({

        //ignore: ":hidden",
        rules: {
            descricao: "required",
		    contador: "required",
        },

        messages: {
             descricao: "",
		     contador: ""
        },
        submitHandler: function(form) {

           if ($(':checkbox').is(':checked')){
			    $('.sucesso').css({"display":"block"});
		   }
		   else {
			    alert("Escolha um dos Stickers "); 
		   }

		   
		}
	});

	var group = document.formulario.box;

	for (var i=0; i<group.length; i++) {
	if (group[i].checked)
	break;
	}

	if (i==group.length)
	return $('.checkmark').addClass('error');
	return $('.checkmark').removeClass('error');

    //if( validate()==true ){ alert( 'deu tudo certo no banco!' ) }
}
