package com.fcproject.service;

import com.fcproject.model.Event;
import com.fcproject.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by ozlemakbas on 05/04/16.
 */

@Service
public class EventServiceImpl implements EventService{

    private EventRepository eventRepository;

    @Autowired
    public void setEventRepository(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    @Override
    public Iterable<Event> listAllEvents() {return eventRepository.findAll();}

    @Override
    public Event getEventById(Integer id) {return eventRepository.findOne(id);}

    @Override
    public Event saveEvent(Event event) {return eventRepository.save(event);}
}
