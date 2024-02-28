package com.ptm.test.model;

public class ProductoConTotal extends Producto {
    private double total;

    public ProductoConTotal(Producto producto) {
        super(producto);
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public double getTotal() {
        return this.total;
    }
}
