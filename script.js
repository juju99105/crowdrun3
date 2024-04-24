function toggleBathroomDetails(value) {
   const details = document.getElementById('bathroom_details');
   if (value === 'yes') {
      details.style.display = 'block';
   } else {
      details.style.display = 'none';
   }
}

var map;
  function initMap() {
    var directionsService = new google.maps.DirectionsService;
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });

  var listPos = [{
 		 arriveeLat: 48.784, arriveeLng: 2.2743419,
     departLat: 48.9016, departLng: 2.29873},
     {arriveeLat: 48.8245306, arriveeLng: 2.40735,
     departLat: 48.799815, departLng: 2.257289},
     ];
  var bounds = new google.maps.LatLngBounds();
  for (var i = 0; i < listPos.length; i++) {

    var startPoint = new google.maps.LatLng(listPos[i]['departLat'], listPos[i]['departLng']);
    var endPoint = new google.maps.LatLng(listPos[i]['arriveeLat'], listPos[i]['arriveeLng']);
    var directionsDisplay = new google.maps.DirectionsRenderer({map: map, preserveViewport: true});
    calculateAndDisplayRoute(directionsService, directionsDisplay, startPoint, endPoint, bounds);
  }

}


  function calculateAndDisplayRoute(directionsService, directionsDisplay, startPoint, endPoint, bounds) {
    directionsService.route({
      origin: startPoint,
      destination: endPoint,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        console.log(response);
        directionsDisplay.setDirections(response);
        bounds.union(response.routes[0].bounds);
        map.fitBounds(bounds);
      } else {
        window.alert('Impossible d afficher la route ' + status);
      }
    });
  }