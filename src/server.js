var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape/:movieId', function(req, res){

	var movieId = req.params.movieId;
    url = 'http://www.imdb.com/title/tt' + movieId;
	

    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);
			
            var title, release, rating;
            var json = { 
				title : "", 
				release : "", 
				rating_current : "",
				rating_possible : ""
			};

            // We'll use the unique header class as a starting point.

            $('.title_wrapper').filter(function(index, element){
				var header = $(this).find('h1');
                json.title = header.text().trim();
				
				release = $(this).find('#titleYear').find('a');
				json.release = release.text();
            })
			
			$('.ratings_wrapper').filter(function(index, element){
				var rating = $(this).find('.ratingValue').find('span');				
				json.rating_current = rating.first().text();
				json.rating_possible = rating.eq(2).text();
			})
			
			res.send(json);
        }
    })
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;