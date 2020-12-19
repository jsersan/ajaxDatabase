<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

$id = $_POST['txtid'];
$nombre = $_POST['txtnombre'];
$estado = $_POST['cmbestado'];

// id, creadoen son campos por defecto

$sql="UPDATE alumnos SET nombre='$nombre',estado='$estado' WHERE id = $id";

$hecho=Database::ejecutar_idu($sql);

if($hecho){
	$respuesta = json_encode( 
		array('err' => false, 
			 'mensaje' => "Actualizado correctamente"
			)
	   );
}else{
	$respuesta = json_encode( 
		array('err' => true, 
			 'mensaje' => $hecho
			)
	   );
}


echo $respuesta;

?>