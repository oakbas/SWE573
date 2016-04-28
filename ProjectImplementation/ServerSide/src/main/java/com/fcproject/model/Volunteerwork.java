package com.fcproject.model;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by ozlemakbas on 31/03/16.
 */
@Entity
public class Volunteerwork {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private Date workDate;

    @ManyToOne(optional = false)
    private Worktype worktype;

    public Integer getId() { return id; }

    public String getDescription() { return description; }

    public Date getWorkDate() { return workDate; }

    public Worktype getWorktype() { return worktype; }
}
