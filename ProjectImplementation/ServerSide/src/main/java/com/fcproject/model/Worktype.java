package com.fcproject.model;

import com.fasterxml.jackson.annotation.JsonProperty;

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

    private String worktypeName;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "worktype")
    private List<Volunteerwork> volunteerworkList;

    public Integer getId() { return id; }

    public String getWorktypeName() { return worktypeName; }

    public List<Volunteerwork> getVolunteerworkList() { return volunteerworkList; }
}
