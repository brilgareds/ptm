package com.ptm.test.service;

import com.ptm.test.interfaceService.IproductoService;
import com.ptm.test.interfaces.ProductoRepository;
import com.ptm.test.model.Producto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoService implements IproductoService {

    @Autowired
    private ProductoRepository productoRepository;

    @Override
    public List<Producto> getAll() {
        return (List<Producto>)productoRepository.findAll();
    }

    @Override
    public List<Producto> findByPrecio(double precio) {
        return productoRepository.findByPrecioLessThanEqual(precio);
    }

    @Override
    public void saveOrUpdate(Producto producto) {
        productoRepository.save(producto);
    }

    @Override
    public void delete(int productoId) {
        productoRepository.deleteById(productoId);
    }
}
