package com.fcproject.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

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
    private Date workDate;

    @ManyToOne(optional = false)
    private Worktype worktype;

    @ManyToOne(optional = false)
    private Member member;

    public Integer getId() { return id; }

    public Date getWorkDate() { return workDate; }

    public Worktype getWorktype() { return worktype; }

    public Member getMember() { return member; }
}
