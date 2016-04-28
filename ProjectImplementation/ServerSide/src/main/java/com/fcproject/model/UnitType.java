package com.fcproject.model;

import javax.persistence.*;
import java.util.List;

/**
 * Created by ozlemakbas on 26/04/16.
 */

@Entity
public class UnitType {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String unitName;

    @OneToMany(mappedBy = "unitType")
    private List<Product> productList;

    public Integer getId() {
        return id;
    }

    public String getUnitName() {
        return unitName;
    }

    public List<Product> getProductList() { return productList; }
}
