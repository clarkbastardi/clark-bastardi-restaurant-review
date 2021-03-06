/**
 * service worker
 */

    var CACHE_NAME = 'restaurant-review-app-cache';
    var urlsToCache = [
      'index.html',
      'restaurant.html',
      'css/styles.css',
      'data/restaurants.json',
      'js/dbhelper.js',
      'js/main.js',
      'js/restaurant_info.js',
      'sw.js',
      'img/1.jpg',
      'img/2.jpg',
      'img/3.jpg',
      'img/4.jpg',
      'img/5.jpg',
      'img/6.jpg',
      'img/7.jpg',
      'img/8.jpg',
      'img/9.jpg',
      'img/10.jpg'
    ];

  self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
    );
  });



