package com.fcproject.model;
import javax.persistence.*;
import java.sql.Date;
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

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    private String bio;

    private Date birthdate;

    private String phone;

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

    public String getPassword() {
        return password;
    }

    public String getBio() {
        return bio;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public String getPhone() {
        return phone;
    }

    public List<Product> getProductList() {
        return productList;
    }
}