function toggleBathroomDetails(value) {
   const details = document.getElementById('bathroom_details');
   if (value === 'yes') {
      details.style.display = 'block';
   } else {
      details.style.display = 'none';
   }
}
//initial google map
let map;
let service;
let infowindow;
let geocoder;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
  infowindow = new google.maps.InfoWindow();
  service = new google.maps.places.PlacesService(map);
  geocoder = new google.maps.Geocoder();
}

function searchTrails() {
  const searchTerm = document.getElementById('trail-search').value;
  const request = {
    query: searchTerm,
    fields: ['name', 'geometry', 'formatted_address', 'rating', 'photos']
  };

  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      document.getElementById('infoWrapper').innerHTML = '';
      results.forEach(place => {
        createMarker(place);
        document.getElementById('infoWrapper').innerHTML += '<div>' +
          `<strong>${place.name}</strong><br>` +
          `Address: ${place.formatted_address}<br>` +
          `Rating: ${place.rating}<br>` +
          `<img src="${place.photos ? place.photos[0].getUrl() : ''}" alt="${place.name}"><br><br>` +
          '</div>';
      });
      map.setCenter(results[0].geometry.location);
    } else {
      document.getElementById('infoWrapper').innerHTML = 'No trails found';
    }
  });
}
function createMarker(place) {
  const marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
      'Place ID: ' + place.place_id + '<br>' +
      place.formatted_address + '</div>');
    infowindow.open(map, this);
  });
}
document.getElementById('trail-search').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    searchTrails();
  }
});

document.getElementById('location-search').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    searchLocation();
  }
});
//search on map
function searchLocation() {
  const address = document.getElementById('location-search').value;
  geocoder.geocode({ 'address': address }, function(results, status) {
    if (status === 'OK') {
      map.setCenter(results[0].geometry.location);
      new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
//event listeners
document.getElementById('trail-search').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    searchTrails();
  }
});
document.getElementById('location-search').addEventListener('keypress', function(e) {
   if (e.key === 'Enter') {
       searchLocation();
   }
});
window.initMap = initMap;