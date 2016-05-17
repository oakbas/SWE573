package com.fcproject.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.List;

/**
 * Created by ozlemakbas on 17/05/16.
 */

@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String roleName;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "role")
    private List<Member> memberList;

    public Integer getId() {
        return id;
    }

    public String getRoleName() {
        return roleName;
    }

    public List<Member> getMemberList() { return memberList; }
}
