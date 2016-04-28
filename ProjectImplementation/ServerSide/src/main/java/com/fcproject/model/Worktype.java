package com.fcproject.model;

import javax.persistence.*;
import java.util.List;

/**
 * Created by ozlemakbas on 28/04/16.
 */

@Entity
public class Worktype {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String volunteerworkName;

    @OneToMany(mappedBy = "worktype")
    private List<Volunteerwork> volunteerworkList;

    public Integer getId() {
        return id;
    }

    public String getUnitName() {
        return volunteerworkName;
    }

    public List<Volunteerwork> getVolunteerworkList() { return volunteerworkList; }
}
