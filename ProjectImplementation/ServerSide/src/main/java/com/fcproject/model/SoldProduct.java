package com.fcproject.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by ozlemakbas on 14/05/16.
 */

@Entity
public class SoldProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    private int soldAmount;

    @Column(nullable = false)
    private Date soldDate;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne
    private Member member;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne(optional = false)
    private Product product;

    public Integer getId() { return id; }

    public int getSoldAmount() { return soldAmount; }

    public Date getSoldDate() { return soldDate; }

    public Member getMember() { return member; }

    public Product getProduct() { return product; }
}

