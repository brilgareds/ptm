package com.ptm.test.interfaces;

import com.ptm.test.model.Producto;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductoRepository extends CrudRepository<Producto, Integer> {
    List<Producto> findByPrecioLessThanEqual(double precio);
}
