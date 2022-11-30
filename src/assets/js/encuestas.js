var $ = jQuery.noComflic();

function mostrar_agregar() {
		$("#modal_agregar").modal("show");
}

// Mostrar encuestas
function mostrarEncuestas() {
    // Mostrar encuestas con el método ajax POST
    $.post("/formularios", {}, function(data, status) {
        $("#tabla_encuestas").html(data);
    });
}

// Mostrar encuestas al cargar la página
$(function() {
    mostrarEncuestas(); // Llamando a la función
});

function agregarEncuesta() {
    // Obtener los valores de los inputs
    var id_usuario  = $("#hidden_id_usuario").val();
    var titulo      = $("#titulo").val();
    var descripcion = $("#descripcion").val();
    var fecha_final = $("#fecha_final").val();
    // Agregar encuesta con el método ajax POST
    $.post("ajax_encuesta/agregarEncuesta.php",
        {
            titulo      : titulo,
            descripcion : descripcion,
            fecha_final : fecha_final,
            id_usuario  : id_usuario
        },
        function (data, status) {
            // Cerrar el modal
            $("#modal_agregar").modal("hide");
            // Mostrar las encuestas nuevamente
            mostrarEncuestas();
            // Limpiar campos del modal
            $("#titulo").val("");
            $("#descripcion").val("");
            $("#fecha_final").val("");
        }
    ) ;
}