package com.fcproject.service;

import com.fcproject.model.Event;

/**
 * Created by ozlemakbas on 05/04/16.
 */

public interface EventService {
    Iterable<Event> listAllEvents();

    Event getEventById(Integer id);

    Event saveEvent(Event event);
}
