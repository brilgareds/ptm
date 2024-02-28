package com.ptm.test.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PutProductDTO {
    @NotNull
    @NotEmpty
    private int id;

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
