/**
 * Created by ozlemakbas on 26/04/16.
 */

package com.fcproject.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.List;

@Entity
public class UnitType {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String unitName;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
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
