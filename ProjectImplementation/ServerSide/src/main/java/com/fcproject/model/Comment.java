package com.fcproject.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

/**
 * Created by ozlemakbas on 05/04/16.
 */

@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    private String body;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne(optional = false)
    private Product product;

    @Column(nullable = false)
    private String username;

    public Integer getId() { return id; }

    public String getBody() { return body; }

    public Product getProduct() { return product; }

    public String getUsername() { return username; }
}
