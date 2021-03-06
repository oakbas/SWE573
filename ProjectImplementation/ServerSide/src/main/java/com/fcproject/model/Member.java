package com.fcproject.model;
import com.fasterxml.jackson.annotation.JsonProperty;

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

    @Column(nullable = false)
    private String password;

    @ManyToOne(optional = false)
    private Role role;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    private String bio;

    private String phone;

    @Column(nullable = false)
    private Boolean membership ;

    @OneToMany(mappedBy = "member")
    private List<SoldProduct> soldProductList;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "member")
    private List<Volunteerwork> volunteerworkList;

    public Integer getId() { return id; }

    public String getFirstname() {
        return firstname;
    }

    public String getSurname() {
        return surname;
    }

    public String getEmail() { return email; }

    public String getBio() {
        return bio;
    }

    public String getPhone() {
        return phone;
    }

    public String getPassword() { return password; }

    public String getUsername() { return username; }

    public Boolean getMembership() { return membership; }

    public Role getRole() { return role; }

    public List<SoldProduct> getSoldProductList() { return soldProductList; }

    public void setMembership(Boolean membership) { this.membership = membership; }

    public List<Volunteerwork> getVolunteerworkList() { return volunteerworkList; }
}
