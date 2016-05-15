package com.fcproject.service;

import com.fcproject.model.News;

/**
 * Created by ozlemakbas on 15/05/16.
 */
public interface NewsService {
    Iterable<News> listAllNews();

    News getNewsById(Integer id);

    News saveNews(News news);
}
