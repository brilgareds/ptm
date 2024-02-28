-- crud_app.producto definition

CREATE TABLE `producto` (
  `cantidad_en_stock` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `precio` float DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;







INSERT INTO crud_app.producto (cantidad_en_stock,precio,descripcion,nombre) VALUES
	 (3,101.0,'Descripcion 1','nombre 1'),
	 (5,143.0,'Descripcion 2','nombre 2'),
	 (35,199.0,'descripcion 3','nombre 3'),
	 (5,230.0,'descripcion 5','nombre 5'),
	 (5,255.0,'descripcion 6','nombre 6'),
	 (5,271.0,'descripcion 7','nombre 7'),
	 (5,289.0,'descripcion 8','nombre 8'),
	 (5,292.0,'descripcion 9','nombre 9'),
	 (5,294.0,'descripcion 10','nombre 10'),
	 (0,12.0,'Descripcion 12','nombre 12');
INSERT INTO crud_app.producto (cantidad_en_stock,precio,descripcion,nombre) VALUES
	 (0,31.0,'Descripcion 13','Nombre 13'),
	 (12,14.0,'Descripcion 14','Nombre 14'),
	 (12,14.0,'test','test');


