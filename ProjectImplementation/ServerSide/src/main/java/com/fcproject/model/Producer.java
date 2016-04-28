package com.fcproject.model;

import javax.persistence.*;
import java.util.List;

/**
 * Created by ozlemakbas on 05/04/16.
 */

@Entity
public class Producer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @OneToMany (mappedBy = "producer")
    private List<Product> productList;

    public Integer getId() {
        return id;
    }

    public List<Product> getProduct() { return productList; }
}
