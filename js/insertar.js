(function() {

    // listener del submit

    $("#frmData").on("submit", function(e) {

        e.preventDefault();

        var formulario = $(this);
        var dataSerializada = formulario.serialize();

        $.ajax({
                type: 'POST',
                url: 'php/servicios/post.alumnos.php',
                dataType: 'json',
                data: dataSerializada
            })
            .done(function(data) {

                console.log("Correcto!");
                console.log(data); // Se imprime en consola la api
                alert("guardado");


            })
            .fail(function() {
                console.log("Fallo!");
            });

    });
})();