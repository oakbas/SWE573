package com.fcproject.service;

import com.fcproject.model.News;
import com.fcproject.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by ozlemakbas on 15/05/16.
 */
@Service
public class NewsServiceImpl implements NewsService {

    NewsRepository newsRepository;

    @Autowired
    public void setNewsRepository(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    @Override
    public Iterable<News> listAllNews() { return newsRepository.findAll(); }

    @Override
    public News getNewsById(Integer id) { return newsRepository.findOne(id); }

    @Override
    public News saveNews(News news) { return newsRepository.save(news); }
}
