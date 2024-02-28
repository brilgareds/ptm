package com.ptm.test.interfaceService;

import com.ptm.test.model.Producto;

import java.util.List;

public interface IproductoService {
    public List<Producto> getAll();
    public List<Producto> findByPrecio(double precio);
    public void saveOrUpdate(Producto producto);
    public void delete(int id);
}
