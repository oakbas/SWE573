package com.fcproject.controller;

import com.fcproject.model.Event;
import com.fcproject.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by ozlemakbas on 05/04/16.
 */

@RestController
public class EventController {
    private EventService eventService;

    @Autowired
    public void setEventService(EventService eventService) {
        this.eventService = eventService;
    }

    @RequestMapping("/events")
    public Iterable<Event> listAllEvents() {
        return eventService.listAllEvents();
    }
}
