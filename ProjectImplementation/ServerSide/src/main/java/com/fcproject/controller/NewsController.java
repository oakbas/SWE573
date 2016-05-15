package com.fcproject.controller;

import com.fcproject.model.News;
import com.fcproject.repository.NewsRepository;
import com.fcproject.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by ozlemakbas on 15/05/16.
 */

@RestController
public class NewsController {

    private NewsService newsService;

    @Autowired
    public void setNewsService(NewsService newsService) { this.newsService = newsService; }

    @RequestMapping("/news")
    public Iterable<News> listAllNews() { return newsService.listAllNews(); }

    @RequestMapping(value = "/addnews", method = RequestMethod.POST)
    public void saveNews(@RequestBody News news) {
        newsService.saveNews(news);
    }
}
