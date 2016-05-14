package com.fcproject.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.List;

/**
 * Created by ozlemakbas on 05/04/16.
 */

@Entity
public class Producer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    private String producerName;

    @Column(nullable = false)
    private String producerAddress;

    @Column(nullable = false)
    private String producerCity;

    private String producerDesc;

    private String producerPhone;

    public String photoURL;

    @Column(columnDefinition = "FLOAT(10,6)")
    private float producerLatitude;

    @Column(columnDefinition = "FLOAT(10,6)")
    private float producerLongitude;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany (mappedBy = "producer")
    private List<Product> productList;

    public Integer getId() {
        return id;
    }

    public String getProducerName() { return producerName; }

    public String getProducerAddress() { return producerAddress; }

    public String getProducerCity() { return producerCity; }

    public String getProducerDesc() { return producerDesc; }

    public String getProducerPhone() { return producerPhone; }

    public List<Product> getProductList() { return productList; }

    public String getPhotoURL() {
        return photoURL;
    }

    public float getProducerLatitude() { return producerLatitude; }

    public float getProducerLongitude() { return producerLongitude; }

    public void setProducerName(String producerName) { this.producerName = producerName; }

    public void setProducerAddress(String producerAddress) { this.producerAddress = producerAddress; }

    public void setProducerCity(String producerCity) { this.producerCity = producerCity; }

    public void setProducerDesc(String producerDesc) { this.producerDesc = producerDesc; }

    public void setProducerPhone(String producerPhone) { this.producerPhone = producerPhone; }

    public void setPhotoURL(String photoURL) { this.photoURL = photoURL; }

    public void setProducerLongitude(float producerLongitude) { this.producerLongitude = producerLongitude; }

    public void setProducerLatitude(float producerLatitude) { this.producerLatitude = producerLatitude; }
}
