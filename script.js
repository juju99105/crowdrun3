// Bathroom Yes/No
function toggleBathroomDetails(value) {
   const details = document.getElementById('bathroom_details');
   if (value === 'yes') {
      details.style.display = 'block';
   } else {
      details.style.display = 'none';
   }
}

// initiate map
var map;
  function initMap() {
    var directionsService = new google.maps.DirectionsService;
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });

    var listPos = [
      //mills college run
      { arriveeLat: 37.782674, arriveeLng: -122.187797, departLat: 37.771174, departLng: -122.176506 },
      //leona heights park run
      { arriveeLat: 37.790926, arriveeLng: -122.179782, departLat: 37.791124, departLng: -122.167964 },
      //merritt college run
      { arriveeLat: 37.787410, arriveeLng: -122.162791, departLat: 37.775693, departLng: -122.145772 },
      //redwood regional park run
      { arriveeLat: 37.821446, arriveeLng: -122.181644, departLat: 37.8287, departLng: -122.1826 },
      //lake chabot run
      { arriveeLat: 37.7331, arriveeLng: -122.1207, departLat: 37.7516, departLng: -122.1264 },
      // Joaquin Miller Park run
      { arriveeLat: 37.8116, arriveeLng: -122.1821, departLat: 37.8068, departLng: -122.1675 },
      // Jack London Square run
      { arriveeLat: 37.7938, arriveeLng: -122.2766, departLat: 37.7952, departLng: -122.2792 },
      // Oakland-Alameda Estuary run
      { arriveeLat: 37.7879, arriveeLng: -122.2590, departLat: 37.7715, departLng: -122.2331 },
      // Piedmont Park run
      { arriveeLat: 37.8274, arriveeLng: -122.2313, departLat: 37.8236, departLng: -122.2346 },
      // Alameda Beach run
      { arriveeLat: 37.7645, arriveeLng: -122.2421, departLat: 37.7714, departLng: -122.2786 },
      // Emeryville Marina run
      { arriveeLat: 37.8342, arriveeLng: -122.3104, departLat: 37.8396, departLng: -122.3147 },
      // Claremont Canyon Regional Preserve run
      { arriveeLat: 37.8638, arriveeLng: -122.2386, departLat: 37.8719, departLng: -122.2441 },
      // Oakland Zoo run
      { arriveeLat: 37.7498, arriveeLng: -122.1476, departLat: 37.7512, departLng: -122.1459 },
      // Martin Luther King Jr. Regional Shoreline run
      { arriveeLat: 37.7347, arriveeLng: -122.1981, departLat: 37.7421, departLng: -122.2135 },
      // Lake Merritt run
      { arriveeLat: 37.8043, arriveeLng: -122.2582, departLat: 37.8090, departLng: -122.2620 },
      // Golden Gate Park run, San Francisco
      { arriveeLat: 37.7694, arriveeLng: -122.4862, departLat: 37.7675, departLng: -122.4943 },
      // Crissy Field run, San Francisco
      { arriveeLat: 37.8066, arriveeLng: -122.4504, departLat: 37.8077, departLng: -122.4375 },
      // Sawyer Camp Trail run, San Mateo
      { arriveeLat: 37.5512, arriveeLng: -122.3601, departLat: 37.5834, departLng: -122.3715 },
      // Baylands Nature Preserve run, Palo Alto
      { arriveeLat: 37.4597, arriveeLng: -122.1084, departLat: 37.4644, departLng: -122.1156 },
      // San Pedro Valley Park run, Pacifica
      { arriveeLat: 37.5804, arriveeLng: -122.4750, departLat: 37.5876, departLng: -122.4738 },
      // Mount Tamalpais run, Marin
      { arriveeLat: 37.9236, arriveeLng: -122.5963, departLat: 37.9125, departLng: -122.6010 },
      // Berkeley Marina run, Berkeley
      { arriveeLat: 37.8630, arriveeLng: -122.3148, departLat: 37.8710, departLng: -122.3194 },
      // Quarry Lakes Regional Recreation Area run, Fremont
      { arriveeLat: 37.5578, arriveeLng: -121.9655, departLat: 37.5480, departLng: -121.9764 },
      // Alviso Marina County Park run, San Jose
      { arriveeLat: 37.4264, arriveeLng: -121.9753, departLat: 37.4322, departLng: -121.9796 },
      // Point Isabel Regional Shoreline run, Richmond
      { arriveeLat: 37.8991, arriveeLng: -122.3207, departLat: 37.9048, departLng: -122.3242 },
      // Tiburon Peninsula run, Marin
      { arriveeLat: 37.8735, arriveeLng: -122.4563, departLat: 37.8808, departLng: -122.4610 },
      // Angel Island State Park run, Tiburon
      { arriveeLat: 37.8600, arriveeLng: -122.4300, departLat: 37.8673, departLng: -122.4348 },
      // Muir Woods National Monument run, Marin
      { arriveeLat: 37.8952, arriveeLng: -122.5785, departLat: 37.9025, departLng: -122.5691 },
      // Half Moon Bay Coastside Trail run, Half Moon Bay
      { arriveeLat: 37.4697, arriveeLng: -122.4458, departLat: 37.4860, departLng: -122.4481 },
      // San Bruno Mountain run, South SF
      { arriveeLat: 37.6900, arriveeLng: -122.4465, departLat: 37.6972, departLng: -122.4379 },
      // Coyote Hills Regional Park run, Fremont
      { arriveeLat: 37.5496, arriveeLng: -122.0891, departLat: 37.5583, departLng: -122.0974 },
      // Loma Alta Open Space Preserve run, Lucas Valley
      { arriveeLat: 38.0152, arriveeLng: -122.5996, departLat: 38.0259, departLng: -122.6068 },
      // Los Gatos Creek Trail run, Los Gatos
      { arriveeLat: 37.2357, arriveeLng: -121.9695, departLat: 37.2270, departLng: -121.9742 },
      // Don Edwards San Francisco Bay National Wildlife Refuge run, Newark
      { arriveeLat: 37.5216, arriveeLng: -122.0485, departLat: 37.5301, departLng: -122.0561 },
      // Ring Mountain Open Space Preserve run, Corte Madera
      { arriveeLat: 37.9120, arriveeLng: -122.4871, departLat: 37.9183, departLng: -122.4943 },
      // Presidio of San Francisco run
      { arriveeLat: 37.7983, arriveeLng: -122.4669, departLat: 37.8047, departLng: -122.4753 },
      // Lands End Trail run, San Francisco
      { arriveeLat: 37.7844, arriveeLng: -122.5053, departLat: 37.7881, departLng: -122.4944 },
      // Fort Funston run, San Francisco
      { arriveeLat: 37.7174, arriveeLng: -122.5027, departLat: 37.7203, departLng: -122.4958 },
      // Twin Peaks run, San Francisco
      { arriveeLat: 37.7544, arriveeLng: -122.4477, departLat: 37.7513, departLng: -122.4525 },
      // Glen Canyon Park run, San Francisco
      { arriveeLat: 37.7380, arriveeLng: -122.4397, departLat: 37.7452, departLng: -122.4436 },
      // Mount Diablo State Park run, Contra Costa
      { arriveeLat: 37.8816, arriveeLng: -121.9146, departLat: 37.8937, departLng: -121.9308 },
      // Henry W. Coe State Park run, Morgan Hill
      { arriveeLat: 37.1887, arriveeLng: -121.5506, departLat: 37.2019, departLng: -121.5648 },
      // Big Basin Redwoods State Park run, Santa Cruz
      { arriveeLat: 37.1725, arriveeLng: -122.2219, departLat: 37.1797, departLng: -122.2351 },
      // Portola Redwoods State Park run, San Mateo
      { arriveeLat: 37.2603, arriveeLng: -122.2151, departLat: 37.2734, departLng: -122.2294 },
      // Samuel P. Taylor State Park run, Marin
      { arriveeLat: 38.0346, arriveeLng: -122.7381, departLat: 38.0469, departLng: -122.7504 },
      // Santa Cruz Beach Boardwalk run, Santa Cruz
      { arriveeLat: 36.9645, arriveeLng: -122.0187, departLat: 36.9580, departLng: -122.0174 },
      // Wilder Ranch State Park run, Santa Cruz
      { arriveeLat: 36.9602, arriveeLng: -122.0838, departLat: 36.9663, departLng: -122.0924 },
      // Nisene Marks State Park run, Santa Cruz
      { arriveeLat: 36.9881, arriveeLng: -121.8967, departLat: 36.9792, departLng: -121.8896 },
      // Monterey Bay Coastal Recreation Trail run, Monterey
      { arriveeLat: 36.6057, arriveeLng: -121.8907, departLat: 36.6182, departLng: -121.9023 },
      // Point Lobos State Natural Reserve run, Carmel-by-the-Sea
      { arriveeLat: 36.5230, arriveeLng: -121.9523, departLat: 36.5155, departLng: -121.9420 },
      // Carmel Beach run, Carmel-by-the-Sea
      { arriveeLat: 36.5552, arriveeLng: -121.9234, departLat: 36.5489, departLng: -121.9272 },
      // Alston Park run, Napa
      { arriveeLat: 38.3468, arriveeLng: -122.3221, departLat: 38.3543, departLng: -122.3284 },
      // Skyline Wilderness Park run, Napa
      { arriveeLat: 38.2574, arriveeLng: -122.2531, departLat: 38.2649, departLng: -122.2615 },
      // Benicia State Recreation Area run, Vallejo
      { arriveeLat: 38.0801, arriveeLng: -122.1935, departLat: 38.0936, departLng: -122.2047 },
      // Mare Island Shoreline Heritage Preserve run, Vallejo
      { arriveeLat: 38.1025, arriveeLng: -122.2630, departLat: 38.1120, departLng: -122.2700 },
      // Dublin Hills Regional Park run, Dublin
      { arriveeLat: 37.7190, arriveeLng: -121.9295, departLat: 37.7285, departLng: -121.9412 },
      // Donlon Point run, Dublin
      { arriveeLat: 37.7440, arriveeLng: -121.9200, departLat: 37.7515, departLng: -121.9280 }
    ];


  var bounds = new google.maps.LatLngBounds();
  for (var i = 0; i < listPos.length; i++) {

    var startPoint = new google.maps.LatLng(listPos[i]['departLat'], listPos[i]['departLng']);
    var endPoint = new google.maps.LatLng(listPos[i]['arriveeLat'], listPos[i]['arriveeLng']);
    var directionsDisplay = new google.maps.DirectionsRenderer({map: map, preserveViewport: true});
    calculateAndDisplayRoute(directionsService, directionsDisplay, startPoint, endPoint, bounds);
  }

}


// create routes
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