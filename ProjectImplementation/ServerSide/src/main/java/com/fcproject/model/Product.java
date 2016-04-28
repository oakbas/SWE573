package com.fcproject.model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

/**
 * Created by ozlemakbas on 31/03/16.
 */
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    private Integer price;

    @Column(nullable = false)
    private Float unit;

    private Integer rate;

    @Column(nullable = false)
    private String productName;

    @Column(nullable = false)
    private String productFrom;

    @JsonIgnore
    @ManyToOne(optional = false)
    private Producer producer;

    @JsonIgnore
    @ManyToOne(optional = false)
    private UnitType unitType;

    @OneToMany(mappedBy = "product")
    private List<Comment> commentList;

    @ManyToMany(targetEntity=Member.class,mappedBy="productList")

    public Integer getId() {
        return id;
    }

    public Integer getPrice() {
        return price;
    }

    public Float getUnit() {
        return unit;
    }

    public Integer getRate() { return rate; }

    public UnitType getUnitType() {
        return unitType;
    }

    public String getProductName() { return productName; }

    public String getProductFrom() { return productFrom; }

    public Producer getProducer() { return producer; }

    public List<Comment> getCommentList() { return commentList; }
}
