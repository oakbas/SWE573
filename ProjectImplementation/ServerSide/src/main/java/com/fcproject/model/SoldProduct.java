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
    private String productName;

    @Column(nullable = false)
    private int soldAmount;

    @ManyToOne(optional = false)
    private Producer producer;

    @Column(nullable = false)
    private Date soldDate;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne(optional = false)
    private Member member;

    public Integer getId() { return id; }

    public String getProductName() { return productName; }

    public int getSoldAmount() { return soldAmount; }

    public Producer getProducer() { return producer; }

    public Date getSoldDate() { return soldDate; }

    public Member getMember() { return member; }
}

