package com.ptm.test.dtos;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PostProductDTO {
    @NotNull
    @NotEmpty
    private String nombre;

    @NotNull
    @NotEmpty
    private String descripcion;

    @NotNull
    @NotEmpty
    private Float precio;

    @NotNull
    @NotEmpty
    private int cantidad_en_stock;
}
