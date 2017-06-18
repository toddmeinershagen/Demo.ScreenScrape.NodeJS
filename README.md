# Demo.ScreenScrape.NodeJS
A demo of screenscraping the nodejs way.  The utility right now will pull the following info for a movie.

* Title
* Release
* Rating - Current
* Rating - Possible

The following is a sample request you can make with an http client.

```
GET /scrape/4061080 HTTP/1.1
Host: localhost:8081
Accept: application/json
Cache-Control: no-cache
Postman-Token: 87dae9a3-33fe-277d-98d2-393f78e5f836
```

If you would like a set of sample requests for Postman, feel free to load them from [here](https://www.getpostman.com/collections/0c3ff3c74066e02802dc).
