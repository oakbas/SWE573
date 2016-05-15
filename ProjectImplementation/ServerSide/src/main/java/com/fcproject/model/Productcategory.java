package com.fcproject.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.List;

/**
 * Created by ozlemakbas on 15/05/16.
 */
@Entity
public class Productcategory {
    @Id
    @GeneratedValue
    private Integer id;

    @Column(nullable = false, unique = true)
    private String categoryName;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "productcategory")
    private List<Product> productList;

    public Integer getId() { return id; }

    public String getCategoryName() { return categoryName; }

    public List<Product> getProductList() { return productList; }
}
