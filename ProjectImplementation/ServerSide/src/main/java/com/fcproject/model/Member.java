package com.fcproject.model;

import javax.persistence.*;
import java.util.List;

/**
 * Created by ozlemakbas on 05/04/16.
 */

@Entity
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    private String firstname;

    @Column(nullable = false)
    private String surname;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    private String bio;

    private String phone;

    @Column(nullable = false)
    private Boolean membership;

    @ManyToMany()
    @JoinTable(joinColumns = { @JoinColumn(name = "member_id") }, inverseJoinColumns = { @JoinColumn(name = "product_id") })
    private List<Product> productList;

    public Integer getId() {
        return id;
    }

    public String getFirstname() {
        return firstname;
    }

    public String getSurname() {
        return surname;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() { return email; }

    public String getPassword() {
        return password;
    }

    public String getBio() {
        return bio;
    }

    public String getPhone() {
        return phone;
    }

    public Boolean getMembership() { return membership; }

    public List<Product> getProductList() {
        return productList;
    }

    public void setMembership(Boolean membership) { this.membership = membership; }
}
