package com.fcproject.model;

import javax.persistence.*;

/**
 * Created by ozlemakbas on 31/03/16.
 */
@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String place;

    @Column(nullable = false)
    private String contactPhone;

    public Integer getId() {
        return id;
    }

    public String getTitle() { return title; }

    public String getDescription() { return description; }

    public String getPlace() { return place; }

    public String getContactPhone() { return contactPhone; }
}
