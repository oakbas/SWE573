package com.fcproject.model;

import com.sun.org.apache.xpath.internal.operations.String;

import javax.persistence.*;

/**
 * Created by ozlemakbas on 31/03/16.
 */
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    private String productName;

    @Column(nullable = false)
    private String placeCome;

    @Column(nullable = false)
    private Integer price;

    @Column(nullable = false)
    private Float unit;

    private Integer rate;

    @ManyToOne(optional = false)
    private UnitType unitType;

}
