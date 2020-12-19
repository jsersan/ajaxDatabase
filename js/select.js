(function() {

    $(document).ready(function() {

        $.ajax({
                type: 'POST',
                url: 'php/servicios/get.alumnos.php',
                dataType: 'json'
            })
            .done(function(data) {

                console.log("Correcto!");

                console.log(data); // Se imprime en consola la api

                if (data.error) {
                    alert("Algo raro pasó");
                    return;
                }

                data.alumnos.forEach(function(alumno, index) {

                    var content = "";
                    content += '<tr id="fila' + alumno.id + '">';
                    content += '<td>' + alumno.id + '</td>';
                    content += '<td>' + alumno.nombre + '</td>';
                    content += '<td class="text-left">';
                    content += '<a href="actualizar.html?id=' + alumno.id + '" class="btn btn-primary w50"><i class="fa fa-edit"></i></a>';
                    content += '</td>';
                    content += '<td class="text-left">';
                    content += '<a href="" data-nombre="' + alumno.nombre + '" data-id="' + alumno.id + '"class="btn btn-danger botEliminar w50"><i class="fa fa-trash"></i></a>';
                    content += '</td>';
                    content += '</tr>';

                    $("#tblRegistros").append(content);

                });


            })
            .fail(function() {
                console.log("Fallo!");
            });


    });

    function borrarRegistro(id) {

        console.log("Ha eliminar el registro2 " + id);

        $.ajax({
                type: 'POST',
                url: 'php/servicios/post.eliminaalumno.php?id=' + id,
                dataType: 'json'
            })
            .done(function(data) {

                console.log("Correcto el borrado!");
                console.log(data); // Se imprime en consola la api

                // Eliminamos la fila automáticamente

                $("#fila" + id).remove();

                swal({
                    title: "Eliminación",
                    text: "El registro se ha elminado correctamente",
                    icon: "success",
                    buttons: true,
                    dangerMode: true
                });

            });
    }

    $("body").on("click", ".botEliminar", function(e) { // Sintaxis por ser elemento dinámico

        e.preventDefault();

        var id = $(this).data('id');
        var nombre = $(this).data('nombre');

        console.log(id);
        console.log(nombre);

        // Cuando estemos seguros que vamos a borrar, eliminamos

        swal({
                title: "Eliminación",
                text: "Está seguro que quiere borrar el registro de " + nombre + "?",
                confirmBottonText: "Sí, bórralo",
                cancelBottonText: "No, déjalo como estaba",
                icon: "warning",
                closeModal: false,
                buttons: true,
                dangerMode: true
            })
            .then((isConfirm) => {
                if (isConfirm) {
                    console.log("Ha eliminar el registro1 " + id);
                    borrarRegistro(id);
                }
            });
    });

})();