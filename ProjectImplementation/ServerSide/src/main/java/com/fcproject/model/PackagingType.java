package com.fcproject.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.List;

/**
 * Created by ozlemakbas on 26/04/16.
 */

@Entity
public class PackagingType {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String packagingName;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "packagingType")
    private List<Product> productList;

    public Integer getId() {
        return id;
    }

    public String getPackagingName() {
        return packagingName;
    }

    public List<Product> getProductList() { return productList; }
}
