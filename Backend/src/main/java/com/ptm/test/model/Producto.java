package com.ptm.test.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "producto")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombre;
    private String descripcion;
    private Float precio;
    private int cantidad_en_stock;

    public Producto() {
    }

    public Producto(Producto producto) {
        super();
        this.id = producto.id;
        this.nombre = producto.nombre;
        this.descripcion = producto.descripcion;
        this.precio = producto.precio;
        this.cantidad_en_stock = producto.cantidad_en_stock;
    }
}
