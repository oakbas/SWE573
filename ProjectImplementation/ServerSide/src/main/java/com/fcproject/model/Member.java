package com.fcproject.model;

import com.sun.org.apache.xpath.internal.operations.String;

import javax.persistence.*;
import java.sql.Date;

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
}
