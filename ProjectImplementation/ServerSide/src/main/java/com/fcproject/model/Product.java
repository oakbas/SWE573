/**
 * Created by ozlemakbas on 31/03/16.
 */
package com.fcproject.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.List;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    private Integer price;

    @Column(nullable = false)
    private Float unit;

    @Column(nullable = false)
    private Float unitAmount;

    private Integer rate;

    @Column(nullable = false)
    private String productName;

    @Column(nullable = false)
    private String productFrom;

    @ManyToOne(optional = false)
    private Producer producer;

    @ManyToOne(optional = false)
    private UnitType unitType;

    @ManyToOne(optional = false)
    private PackagingType packagingType;

    @ManyToOne(optional = false)
    private Productcategory productcategory;

    @Column(columnDefinition = "MEDIUMTEXT")
    public String photoURL;

    @OneToMany(mappedBy = "product")
    private List<Comment> commentList;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "product")
    private List<SoldProduct> soldProductList;

    public Integer getId() {
        return id;
    }

    public Integer getPrice() {
        return price;
    }

    public Float getUnit() { return unit; }

    public Integer getRate() { return rate; }

    public UnitType getUnitType() {
        return unitType;
    }

    public String getProductName() { return productName; }

    public String getProductFrom() { return productFrom; }

    public Producer getProducer() { return producer; }

    public List<Comment> getCommentList() { return commentList; }

    public Float getUnitAmount() { return unitAmount; }

    public PackagingType getPackagingType() { return packagingType; }

    public List<SoldProduct> getSoldProductList() { return soldProductList; }

    public Productcategory getProductcategory() { return productcategory; }

    public void setUnitAmount(Float unitAmount) {
        this.unitAmount = unitAmount;
    }

    public String getPhotoURL() { return photoURL; }
}
