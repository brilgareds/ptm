package com.ptm.test.controller;

import com.ptm.test.dtos.PostProductDTO;
import com.ptm.test.dtos.PutProductDTO;
import com.ptm.test.interfaceService.IproductoService;
import com.ptm.test.model.Producto;
import com.ptm.test.model.ProductoConTotal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
import javax.validation.Valid;

@RestController
@RequestMapping(path = "/product")
public class ProductoController {
    @Autowired
    private IproductoService service;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/findByPrecio/{maxprice}")
    public List<Producto> findByPrecio(@PathVariable(name = "maxprice") double maxprice) {
        return service.findByPrecio(maxprice);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getAll")
    public List<ProductoConTotal> getAll(Model model) {
        var product = service.getAll();

        return product.stream()
            .map(producto -> {
                ProductoConTotal productoConTotal = new ProductoConTotal(producto);
                productoConTotal.setTotal(producto.getPrecio() * producto.getCantidad_en_stock());
                return productoConTotal;
            })
            .collect(Collectors.toList());
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/create")
    public void create(@RequestBody @Valid PostProductDTO producto) {
        Producto newProducto = new Producto();
        newProducto.setNombre(producto.getNombre());
        newProducto.setDescripcion(producto.getDescripcion());
        newProducto.setPrecio(producto.getPrecio());
        newProducto.setCantidad_en_stock(producto.getCantidad_en_stock());

        service.saveOrUpdate(newProducto);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/update")
    public void update(@RequestBody @Valid PutProductDTO producto) {
        Producto newProducto = new Producto();
        newProducto.setId(producto.getId());
        newProducto.setNombre(producto.getNombre());
        newProducto.setDescripcion(producto.getDescripcion());
        newProducto.setPrecio(producto.getPrecio());
        newProducto.setCantidad_en_stock(producto.getCantidad_en_stock());

        service.saveOrUpdate(newProducto);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/delete/{productoId}")
    public void delete(@PathVariable(name = "productoId") int productoId) {
        service.delete(productoId);
    }
}
