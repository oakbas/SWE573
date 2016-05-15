package com.fcproject.model;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by ozlemakbas on 15/05/16.
 */

@Entity
public class News {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    private String newsBody;

    @Column(nullable = false)
    private Date dueDate;

    public Integer getId() { return id; }

    public String getNewsBody() { return newsBody; }

    public Date getDueDate() { return dueDate; }
}
